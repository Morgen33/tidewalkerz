import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface InteractiveWaveShaderProps {
  hasActive?: boolean;
  hasUpcoming?: boolean;
  dimmingDisabled?: boolean;
  className?: string;
}

const InteractiveWaveShader: React.FC<InteractiveWaveShaderProps> = ({
  hasActive = false,
  hasUpcoming = false,
  dimmingDisabled = true,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.hasActiveReminders.value = hasActive;
    }
  }, [hasActive]);

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.hasUpcomingReminders.value = hasUpcoming;
    }
  }, [hasUpcoming]);

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.disableCenterDimming.value = dimmingDisabled;
    }
  }, [dimmingDisabled]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);
    } catch (err) {
      console.error('WebGL not supported', err);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    const vertexShader = `
      varying vec2 vTextureCoord;
      void main() {
        vTextureCoord = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    // Ocean-themed shader with cyan/blue colors matching the TideWalkerz theme
    const fragmentShader = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;
      uniform bool hasActiveReminders;
      uniform bool hasUpcomingReminders;
      uniform bool disableCenterDimming;
      varying vec2 vTextureCoord;

      void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        vec2 uv = (2.0 * fragCoord - iResolution.xy) / min(iResolution.x, iResolution.y);

        vec2 center = iResolution.xy * 0.5;
        float dist = distance(fragCoord, center);
        float radius = min(iResolution.x, iResolution.y) * 0.5;
        
        float centerDim = disableCenterDimming ? 1.0 : smoothstep(radius * 0.3, radius * 0.5, dist);

        for(float i = 1.0; i < 10.0; i++){
          uv.x += 0.6 / i * cos(i * 2.5 * uv.y + iTime * 0.5);
          uv.y += 0.6 / i * cos(i * 1.5 * uv.x + iTime * 0.5);
        }
        
        // Ocean cyan/teal colors for TideWalkerz theme
        if (hasActiveReminders) {
          fragColor = vec4(vec3(0.0, 0.6, 0.8) / abs(sin(iTime - uv.y - uv.x)), 1.0);
        } else if (hasUpcomingReminders) {
          fragColor = vec4(vec3(0.1, 0.5, 0.6) / abs(sin(iTime - uv.y - uv.x)), 1.0);
        } else {
          // Default ocean blue/cyan gradient
          fragColor = vec4(vec3(0.05, 0.15, 0.25) / abs(sin(iTime - uv.y - uv.x)), 1.0);
        }
        
        if (!disableCenterDimming) {
          fragColor.rgb = mix(fragColor.rgb * 0.3, fragColor.rgb, centerDim);
        }
      }

      void main() {
        vec4 color;
        mainImage(color, vTextureCoord * iResolution);
        gl_FragColor = color;
      }
    `;

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      iMouse: { value: new THREE.Vector2() },
      hasActiveReminders: { value: hasActive },
      hasUpcomingReminders: { value: hasUpcoming },
      disableCenterDimming: { value: dimmingDisabled },
    };
    
    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
    materialRef.current = material;
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value.set(w, h);
    };

    const onMouseMove = (event: MouseEvent) => {
      uniforms.iMouse.value.set(event.clientX, event.clientY);
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);
    onResize();

    renderer.setAnimationLoop(() => {
      uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    });

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      renderer.setAnimationLoop(null);
      const canvas = renderer.domElement;
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, [hasActive, hasUpcoming, dimmingDisabled]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};

export default InteractiveWaveShader;
