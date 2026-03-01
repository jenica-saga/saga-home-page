'use client';

import { useEffect } from 'react';

export default function HeroDemoAnimation() {
  useEffect(() => {
    // Animation logic for the hero demo
    (function () {
      const scenes = document.querySelectorAll('.demo-scene');
      const dots = document.querySelectorAll('.demo-dot');
      let current = 0;
      let animationTimeouts: NodeJS.Timeout[] = [];

      function clearAnimations() {
        animationTimeouts.forEach((t) => clearTimeout(t));
        animationTimeouts = [];
      }

      function resetScene(scene: Element) {
        scene
          .querySelectorAll(
            '.demo-label, .demo-chat-head, .demo-context, .dm, .dm-action, .ctx-tag, .think-step'
          )
          .forEach((el) => {
            el.classList.remove('visible', 'done', 'ctx-new');
          });
        scene.querySelectorAll('.ctx-spinner').forEach((el) => {
          el.classList.add('visible');
        });
        scene.querySelectorAll('.ctx-check').forEach((el) => {
          el.classList.remove('visible');
        });
      }

      // Reveal context tags for a specific phase
      function revealPhaseTags(scene: Element, phase: number) {
        const ctx = scene.querySelector('.demo-context');
        if (!ctx) return 0;
        const tags = ctx.querySelectorAll('.ctx-tag[data-phase="' + phase + '"]');
        let tagDelay = 0;
        tags.forEach((tag) => {
          animationTimeouts.push(
            setTimeout(() => {
              if (phase > 0) tag.classList.add('ctx-new');
              tag.classList.add('visible');
            }, tagDelay)
          );
          tagDelay += 300;
        });
        return tagDelay;
      }

      function animateScene(scene: Element) {
        const label = scene.querySelector('.demo-label');
        const head = scene.querySelector('.demo-chat-head');
        const ctx = scene.querySelector('.demo-context');
        const messages = scene.querySelector('.demo-messages');
        const children = messages?.children || [];
        const spinner = ctx ? ctx.querySelector('.ctx-spinner') : null;
        const check = ctx ? ctx.querySelector('.ctx-check') : null;

        let delay = 600;

        // 1. Label + header
        if (label && head) {
          animationTimeouts.push(
            setTimeout(() => {
              label.classList.add('visible');
              head.classList.add('visible');
            }, delay)
          );
        }
        delay += 1000;

        // 2. Show context banner + initial (phase 0) tags
        if (ctx) {
          animationTimeouts.push(
            setTimeout(() => {
              ctx.classList.add('visible');
            }, delay)
          );
          delay += 600;

          // Phase 0 tags
          const phase0Tags = ctx.querySelectorAll('.ctx-tag[data-phase="0"]');
          phase0Tags.forEach((tag) => {
            animationTimeouts.push(
              setTimeout(() => {
                tag.classList.add('visible');
              }, delay)
            );
            delay += 500;
          });

          // Spinner → check after initial tags
          delay += 400;
          animationTimeouts.push(
            setTimeout(() => {
              if (spinner) spinner.classList.remove('visible');
              if (check) check.classList.add('visible');
            }, delay)
          );
          delay += 600;
        }

        // 3. Walk through message children in order
        for (let i = 0; i < children.length; i++) {
          const el = children[i];

          if (el.classList.contains('dm')) {
            // Chat bubble
            animationTimeouts.push(
              setTimeout(() => {
                el.classList.add('visible');
              }, delay)
            );
            delay += 1800;

            // Check if this message triggers a new context phase
            const ctxPhase = el.getAttribute('data-ctx-phase');
            if (ctxPhase && ctx) {
              const phaseTags = ctx.querySelectorAll(
                '.ctx-tag[data-phase="' + ctxPhase + '"]'
              );
              phaseTags.forEach((tag) => {
                animationTimeouts.push(
                  setTimeout(() => {
                    tag.classList.add('ctx-new', 'visible');
                  }, delay)
                );
                delay += 450;
              });
              delay += 300;
            }
          } else if (el.classList.contains('think-block')) {
            // Thinking steps
            const steps = el.querySelectorAll('.think-step');
            steps.forEach((step) => {
              animationTimeouts.push(
                setTimeout(() => {
                  step.classList.add('visible');
                }, delay)
              );
              delay += 900;

              animationTimeouts.push(
                setTimeout(() => {
                  step.classList.add('done');
                }, delay)
              );
              delay += 350;
            });
            delay += 500;
          } else if (el.classList.contains('dm-action')) {
            delay += 500;
            animationTimeouts.push(
              setTimeout(() => {
                el.classList.add('visible');
              }, delay)
            );
            delay += 600;
          }
        }

        // 4. Hold, then crossfade
        delay += 3000;
        animationTimeouts.push(
          setTimeout(() => {
            showScene((current + 1) % scenes.length);
          }, delay)
        );
      }

      function showScene(idx: number) {
        clearAnimations();

        // Crossfade: fade out current, fade in new simultaneously
        const oldScene = scenes[current];
        const newScene = scenes[idx];

        // Reset new scene elements before showing
        resetScene(newScene);

        // Fade out old, fade in new
        oldScene.classList.remove('active');
        newScene.classList.add('active');
        dots.forEach((d) => d.classList.remove('active'));
        dots[idx].classList.add('active');
        current = idx;

        // Start animating new scene after crossfade settles
        animationTimeouts.push(
          setTimeout(() => {
            animateScene(newScene);
          }, 500)
        );
      }

      // Clicking dots
      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          showScene(i);
        });
      });

      // Start first scene directly
      resetScene(scenes[0]);
      scenes[0].classList.add('active');
      dots[0].classList.add('active');
      current = 0;
      animateScene(scenes[0]);

      // Cleanup function
      return () => {
        clearAnimations();
      };
    })();
  }, []);

  return null; // This component only runs side effects
}
