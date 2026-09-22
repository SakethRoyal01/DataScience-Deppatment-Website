// import React, { useRef, useEffect, useState, useCallback } from 'react';
// import { gsap } from 'gsap';

// export interface BentoCardProps {
//   color?: string;
//   title?: string;
//   description?: string;
//   label?: string;
//   textAutoHide?: boolean;
//   disableAnimations?: boolean;
// }

// export interface BentoProps {
//   textAutoHide?: boolean;
//   enableStars?: boolean;
//   enableSpotlight?: boolean;
//   enableBorderGlow?: boolean;
//   disableAnimations?: boolean;
//   spotlightRadius?: number;
//   particleCount?: number;
//   enableTilt?: boolean;
//   glowColor?: string;
//   clickEffect?: boolean;
//   enableMagnetism?: boolean;
// }

// const DEFAULT_PARTICLE_COUNT = 12;
// const DEFAULT_SPOTLIGHT_RADIUS = 300;
// const DEFAULT_GLOW_COLOR = '132, 0, 255';
// const MOBILE_BREAKPOINT = 768;

// const cardData: BentoCardProps[] = [
//   {
//     color: '#120F17',
//     title: 'Analytics',
//     description: 'Track user behavior',
//     label: 'Insights'
//   },
//   {
//     color: '#120F17',
//     title: 'Dashboard',
//     description: 'Centralized data view',
//     label: 'Overview'
//   },
//   {
//     color: '#120F17',
//     title: 'Collaboration',
//     description: 'Work together seamlessly',
//     label: 'Teamwork'
//   },
//   {
//     color: '#120F17',
//     title: 'Automation',
//     description: 'Streamline workflows',
//     label: 'Efficiency'
//   },
//   {
//     color: '#120F17',
//     title: 'Integration',
//     description: 'Connect favorite tools',
//     label: 'Connectivity'
//   },
//   {
//     color: '#120F17',
//     title: 'Security',
//     description: 'Enterprise-grade protection',
//     label: 'Protection'
//   }
// ];

// const createParticleElement = (x: number, y: number, color: string = DEFAULT_GLOW_COLOR): HTMLDivElement => {
//   const el = document.createElement('div');
//   el.className = 'particle';
//   el.style.cssText = `
//     position: absolute;
//     width: 4px;
//     height: 4px;
//     border-radius: 50%;
//     background: rgba(${color}, 1);
//     box-shadow: 0 0 6px rgba(${color}, 0.6);
//     pointer-events: none;
//     z-index: 100;
//     left: ${x}px;
//     top: ${y}px;
//   `;
//   return el;
// };

// const calculateSpotlightValues = (radius: number) => ({
//   proximity: radius * 0.5,
//   fadeDistance: radius * 0.75
// });

// const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
//   const rect = card.getBoundingClientRect();
//   const relativeX = ((mouseX - rect.left) / rect.width) * 100;
//   const relativeY = ((mouseY - rect.top) / rect.height) * 100;

//   card.style.setProperty('--glow-x', `${relativeX}%`);
//   card.style.setProperty('--glow-y', `${relativeY}%`);
//   card.style.setProperty('--glow-intensity', glow.toString());
//   card.style.setProperty('--glow-radius', `${radius}px`);
// };

// const ParticleCard: React.FC<{
//   children: React.ReactNode;
//   className?: string;
//   disableAnimations?: boolean;
//   style?: React.CSSProperties;
//   particleCount?: number;
//   glowColor?: string;
//   enableTilt?: boolean;
//   clickEffect?: boolean;
//   enableMagnetism?: boolean;
// }> = ({
//   children,
//   className = '',
//   disableAnimations = false,
//   style,
//   particleCount = DEFAULT_PARTICLE_COUNT,
//   glowColor = DEFAULT_GLOW_COLOR,
//   enableTilt = true,
//   clickEffect = false,
//   enableMagnetism = false
// }) => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const particlesRef = useRef<HTMLDivElement[]>([]);
//   const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
//   const isHoveredRef = useRef(false);
//   const memoizedParticles = useRef<HTMLDivElement[]>([]);
//   const particlesInitialized = useRef(false);
//   const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

//   const initializeParticles = useCallback(() => {
//     if (particlesInitialized.current || !cardRef.current) return;

//     const { width, height } = cardRef.current.getBoundingClientRect();
//     memoizedParticles.current = Array.from({ length: particleCount }, () =>
//       createParticleElement(Math.random() * width, Math.random() * height, glowColor)
//     );
//     particlesInitialized.current = true;
//   }, [particleCount, glowColor]);

//   const clearAllParticles = useCallback(() => {
//     timeoutsRef.current.forEach(clearTimeout);
//     timeoutsRef.current = [];
//     magnetismAnimationRef.current?.kill();

//     particlesRef.current.forEach(particle => {
//       gsap.to(particle, {
//         scale: 0,
//         opacity: 0,
//         duration: 0.3,
//         ease: 'back.in(1.7)',
//         onComplete: () => {
//           particle.parentNode?.removeChild(particle);
//         }
//       });
//     });
//     particlesRef.current = [];
//   }, []);

//   const animateParticles = useCallback(() => {
//     if (!cardRef.current || !isHoveredRef.current) return;

//     if (!particlesInitialized.current) {
//       initializeParticles();
//     }

//     memoizedParticles.current.forEach((particle, index) => {
//       const timeoutId = setTimeout(() => {
//         if (!isHoveredRef.current || !cardRef.current) return;

//         const clone = particle.cloneNode(true) as HTMLDivElement;
//         cardRef.current.appendChild(clone);
//         particlesRef.current.push(clone);

//         gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

//         gsap.to(clone, {
//           x: (Math.random() - 0.5) * 100,
//           y: (Math.random() - 0.5) * 100,
//           rotation: Math.random() * 360,
//           duration: 2 + Math.random() * 2,
//           ease: 'none',
//           repeat: -1,
//           yoyo: true
//         });

//         gsap.to(clone, {
//           opacity: 0.3,
//           duration: 1.5,
//           ease: 'power2.inOut',
//           repeat: -1,
//           yoyo: true
//         });
//       }, index * 100);

//       timeoutsRef.current.push(timeoutId);
//     });
//   }, [initializeParticles]);

//   useEffect(() => {
//     if (disableAnimations || !cardRef.current) return;

//     const element = cardRef.current;

//     const handleMouseEnter = () => {
//       isHoveredRef.current = true;
//       animateParticles();

//       if (enableTilt) {
//         gsap.to(element, {
//           rotateX: 5,
//           rotateY: 5,
//           duration: 0.3,
//           ease: 'power2.out',
//           transformPerspective: 1000
//         });
//       }
//     };

//     const handleMouseLeave = () => {
//       isHoveredRef.current = false;
//       clearAllParticles();

//       if (enableTilt) {
//         gsap.to(element, {
//           rotateX: 0,
//           rotateY: 0,
//           duration: 0.3,
//           ease: 'power2.out'
//         });
//       }

//       if (enableMagnetism) {
//         gsap.to(element, {
//           x: 0,
//           y: 0,
//           duration: 0.3,
//           ease: 'power2.out'
//         });
//       }
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!enableTilt && !enableMagnetism) return;

//       const rect = element.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;

//       if (enableTilt) {
//         const rotateX = ((y - centerY) / centerY) * -10;
//         const rotateY = ((x - centerX) / centerX) * 10;

//         gsap.to(element, {
//           rotateX,
//           rotateY,
//           duration: 0.1,
//           ease: 'power2.out',
//           transformPerspective: 1000
//         });
//       }

//       if (enableMagnetism) {
//         const magnetX = (x - centerX) * 0.05;
//         const magnetY = (y - centerY) * 0.05;

//         magnetismAnimationRef.current = gsap.to(element, {
//           x: magnetX,
//           y: magnetY,
//           duration: 0.3,
//           ease: 'power2.out'
//         });
//       }
//     };

//     const handleClick = (e: MouseEvent) => {
//       if (!clickEffect) return;

//       const rect = element.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       const maxDistance = Math.max(
//         Math.hypot(x, y),
//         Math.hypot(x - rect.width, y),
//         Math.hypot(x, y - rect.height),
//         Math.hypot(x - rect.width, y - rect.height)
//       );

//       const ripple = document.createElement('div');
//       ripple.style.cssText = `
//         position: absolute;
//         width: ${maxDistance * 2}px;
//         height: ${maxDistance * 2}px;
//         border-radius: 50%;
//         background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
//         left: ${x - maxDistance}px;
//         top: ${y - maxDistance}px;
//         pointer-events: none;
//         z-index: 1000;
//       `;

//       element.appendChild(ripple);

//       gsap.fromTo(
//         ripple,
//         {
//           scale: 0,
//           opacity: 1
//         },
//         {
//           scale: 1,
//           opacity: 0,
//           duration: 0.8,
//           ease: 'power2.out',
//           onComplete: () => ripple.remove()
//         }
//       );
//     };

//     element.addEventListener('mouseenter', handleMouseEnter);
//     element.addEventListener('mouseleave', handleMouseLeave);
//     element.addEventListener('mousemove', handleMouseMove);
//     element.addEventListener('click', handleClick);

//     return () => {
//       isHoveredRef.current = false;
//       element.removeEventListener('mouseenter', handleMouseEnter);
//       element.removeEventListener('mouseleave', handleMouseLeave);
//       element.removeEventListener('mousemove', handleMouseMove);
//       element.removeEventListener('click', handleClick);
//       clearAllParticles();
//     };
//   }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

//   return (
//     <div
//       ref={cardRef}
//       className={`${className} relative overflow-hidden`}
//       style={{ ...style, position: 'relative', overflow: 'hidden' }}
//     >
//       {children}
//     </div>
//   );
// };

// const GlobalSpotlight: React.FC<{
//   gridRef: React.RefObject<HTMLDivElement | null>;
//   disableAnimations?: boolean;
//   enabled?: boolean;
//   spotlightRadius?: number;
//   glowColor?: string;
// }> = ({
//   gridRef,
//   disableAnimations = false,
//   enabled = true,
//   spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
//   glowColor = DEFAULT_GLOW_COLOR
// }) => {
//   const spotlightRef = useRef<HTMLDivElement | null>(null);
//   const isInsideSection = useRef(false);

//   useEffect(() => {
//     if (disableAnimations || !gridRef?.current || !enabled) return;

//     const spotlight = document.createElement('div');
//     spotlight.className = 'global-spotlight';
//     spotlight.style.cssText = `
//       position: fixed;
//       width: 800px;
//       height: 800px;
//       border-radius: 50%;
//       pointer-events: none;
//       background: radial-gradient(circle,
//         rgba(${glowColor}, 0.15) 0%,
//         rgba(${glowColor}, 0.08) 15%,
//         rgba(${glowColor}, 0.04) 25%,
//         rgba(${glowColor}, 0.02) 40%,
//         rgba(${glowColor}, 0.01) 65%,
//         transparent 70%
//       );
//       z-index: 200;
//       opacity: 0;
//       transform: translate(-50%, -50%);
//       mix-blend-mode: screen;
//     `;
//     document.body.appendChild(spotlight);
//     spotlightRef.current = spotlight;

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!spotlightRef.current || !gridRef.current) return;

//       const section = gridRef.current.closest('.bento-section');
//       const rect = section?.getBoundingClientRect();
//       const mouseInside =
//         rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

//       isInsideSection.current = mouseInside || false;
//       const cards = gridRef.current.querySelectorAll('.card');

//       if (!mouseInside) {
//         gsap.to(spotlightRef.current, {
//           opacity: 0,
//           duration: 0.3,
//           ease: 'power2.out'
//         });
//         cards.forEach(card => {
//           (card as HTMLElement).style.setProperty('--glow-intensity', '0');
//         });
//         return;
//       }

//       const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
//       let minDistance = Infinity;

//       cards.forEach(card => {
//         const cardElement = card as HTMLElement;
//         const cardRect = cardElement.getBoundingClientRect();
//         const centerX = cardRect.left + cardRect.width / 2;
//         const centerY = cardRect.top + cardRect.height / 2;
//         const distance =
//           Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
//         const effectiveDistance = Math.max(0, distance);

//         minDistance = Math.min(minDistance, effectiveDistance);

//         let glowIntensity = 0;
//         if (effectiveDistance <= proximity) {
//           glowIntensity = 1;
//         } else if (effectiveDistance <= fadeDistance) {
//           glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
//         }

//         updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
//       });

//       gsap.to(spotlightRef.current, {
//         left: e.clientX,
//         top: e.clientY,
//         duration: 0.1,
//         ease: 'power2.out'
//       });

//       const targetOpacity =
//         minDistance <= proximity
//           ? 0.8
//           : minDistance <= fadeDistance
//             ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
//             : 0;

//       gsap.to(spotlightRef.current, {
//         opacity: targetOpacity,
//         duration: targetOpacity > 0 ? 0.2 : 0.5,
//         ease: 'power2.out'
//       });
//     };

//     const handleMouseLeave = () => {
//       isInsideSection.current = false;
//       gridRef.current?.querySelectorAll('.card').forEach(card => {
//         (card as HTMLElement).style.setProperty('--glow-intensity', '0');
//       });
//       if (spotlightRef.current) {
//         gsap.to(spotlightRef.current, {
//           opacity: 0,
//           duration: 0.3,
//           ease: 'power2.out'
//         });
//       }
//     };

//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseleave', handleMouseLeave);
//       spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
//     };
//   }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

//   return null;
// };

// const BentoCardGrid: React.FC<{
//   children: React.ReactNode;
//   gridRef?: React.RefObject<HTMLDivElement | null>;
// }> = ({ children, gridRef }) => (
//   <div
//     className="bento-section grid gap-2 p-3 max-w-[54rem] select-none relative"
//     style={{ fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.5rem)' }}
//     ref={gridRef}
//   >
//     {children}
//   </div>
// );

// const useMobileDetection = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

//     checkMobile();
//     window.addEventListener('resize', checkMobile);

//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   return isMobile;
// };

// const MagicBento: React.FC<BentoProps> = ({
//   textAutoHide = true,
//   enableStars = true,
//   enableSpotlight = true,
//   enableBorderGlow = true,
//   disableAnimations = false,
//   spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
//   particleCount = DEFAULT_PARTICLE_COUNT,
//   enableTilt = false,
//   glowColor = DEFAULT_GLOW_COLOR,
//   clickEffect = true,
//   enableMagnetism = true
// }) => {
//   const gridRef = useRef<HTMLDivElement>(null);
//   const isMobile = useMobileDetection();
//   const shouldDisableAnimations = disableAnimations || isMobile;

//   return (
//     <>
//       <style>
//         {`
//           .bento-section {
//             --glow-x: 50%;
//             --glow-y: 50%;
//             --glow-intensity: 0;
//             --glow-radius: 200px;
//             --glow-color: ${glowColor};
//             --border-color: #2F293A;
//             --background-dark: #120F17;
//             --white: hsl(0, 0%, 100%);
//             --purple-primary: rgba(132, 0, 255, 1);
//             --purple-glow: rgba(132, 0, 255, 0.2);
//             --purple-border: rgba(132, 0, 255, 0.8);
//           }
          
//           .card-responsive {
//             grid-template-columns: 1fr;
//             width: 90%;
//             margin: 0 auto;
//             padding: 0.5rem;
//           }
          
//           @media (min-width: 600px) {
//             .card-responsive {
//               grid-template-columns: repeat(2, 1fr);
//             }
//           }
          
//           @media (min-width: 1024px) {
//             .card-responsive {
//               grid-template-columns: repeat(4, 1fr);
//             }
            
//             .card-responsive .card:nth-child(3) {
//               grid-column: span 2;
//               grid-row: span 2;
//             }
            
//             .card-responsive .card:nth-child(4) {
//               grid-column: 1 / span 2;
//               grid-row: 2 / span 2;
//             }
            
//             .card-responsive .card:nth-child(6) {
//               grid-column: 4;
//               grid-row: 3;
//             }
//           }
          
//           .card--border-glow::after {
//             content: '';
//             position: absolute;
//             inset: 0;
//             padding: 6px;
//             background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
//                 rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
//                 rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
//                 transparent 60%);
//             border-radius: inherit;
//             -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//             -webkit-mask-composite: xor;
//             mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//             mask-composite: exclude;
//             pointer-events: none;
//             opacity: 1;
//             transition: opacity 0.3s ease;
//             z-index: 1;
//           }
          
//           .card--border-glow:hover::after {
//             opacity: 1;
//           }
          
//           .card--border-glow:hover {
//             box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${glowColor}, 0.2);
//           }
          
//           .particle::before {
//             content: '';
//             position: absolute;
//             top: -2px;
//             left: -2px;
//             right: -2px;
//             bottom: -2px;
//             background: rgba(${glowColor}, 0.2);
//             border-radius: 50%;
//             z-index: -1;
//           }
          
//           .particle-container:hover {
//             box-shadow: 0 4px 20px rgba(46, 24, 78, 0.2), 0 0 30px rgba(${glowColor}, 0.2);
//           }
          
//           .text-clamp-1 {
//             display: -webkit-box;
//             -webkit-box-orient: vertical;
//             -webkit-line-clamp: 1;
//             line-clamp: 1;
//             overflow: hidden;
//             text-overflow: ellipsis;
//           }
          
//           .text-clamp-2 {
//             display: -webkit-box;
//             -webkit-box-orient: vertical;
//             -webkit-line-clamp: 2;
//             line-clamp: 2;
//             overflow: hidden;
//             text-overflow: ellipsis;
//           }
          
//           @media (max-width: 599px) {
//             .card-responsive {
//               grid-template-columns: 1fr;
//               width: 90%;
//               margin: 0 auto;
//               padding: 0.5rem;
//             }
            
//             .card-responsive .card {
//               width: 100%;
//               min-height: 180px;
//             }
//           }
//         `}
//       </style>

//       {enableSpotlight && (
//         <GlobalSpotlight
//           gridRef={gridRef}
//           disableAnimations={shouldDisableAnimations}
//           enabled={enableSpotlight}
//           spotlightRadius={spotlightRadius}
//           glowColor={glowColor}
//         />
//       )}

//       <BentoCardGrid gridRef={gridRef}>
//         <div className="card-responsive grid gap-2">
//           {cardData.map((card, index) => {
//             const baseClassName = `card flex flex-col justify-between relative aspect-[4/3] min-h-[200px] w-full max-w-full p-5 rounded-[20px] border border-solid font-light overflow-hidden transition-colors duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${
//               enableBorderGlow ? 'card--border-glow' : ''
//             }`;

//             const cardStyle = {
//               backgroundColor: card.color || 'var(--background-dark)',
//               borderColor: 'var(--border-color)',
//               color: 'var(--white)',
//               '--glow-x': '50%',
//               '--glow-y': '50%',
//               '--glow-intensity': '0',
//               '--glow-radius': '200px'
//             } as React.CSSProperties;

//             if (enableStars) {
//               return (
//                 <ParticleCard
//                   key={index}
//                   className={baseClassName}
//                   style={cardStyle}
//                   disableAnimations={shouldDisableAnimations}
//                   particleCount={particleCount}
//                   glowColor={glowColor}
//                   enableTilt={enableTilt}
//                   clickEffect={clickEffect}
//                   enableMagnetism={enableMagnetism}
//                 >
//                   <div className="card__header flex justify-between gap-3 relative text-white">
//                     <span className="card__label text-base">{card.label}</span>
//                   </div>
//                   <div className="card__content flex flex-col relative text-white">
//                     <h3 className={`card__title font-normal text-base m-0 mb-1 ${textAutoHide ? 'text-clamp-1' : ''}`}>
//                       {card.title}
//                     </h3>
//                     <p
//                       className={`card__description text-xs leading-5 opacity-90 ${textAutoHide ? 'text-clamp-2' : ''}`}
//                     >
//                       {card.description}
//                     </p>
//                   </div>
//                 </ParticleCard>
//               );
//             }

//             return (
//               <div
//                 key={index}
//                 className={baseClassName}
//                 style={cardStyle}
//                 ref={el => {
//                   if (!el) return;

//                   const handleMouseMove = (e: MouseEvent) => {
//                     if (shouldDisableAnimations) return;

//                     const rect = el.getBoundingClientRect();
//                     const x = e.clientX - rect.left;
//                     const y = e.clientY - rect.top;
//                     const centerX = rect.width / 2;
//                     const centerY = rect.height / 2;

//                     if (enableTilt) {
//                       const rotateX = ((y - centerY) / centerY) * -10;
//                       const rotateY = ((x - centerX) / centerX) * 10;

//                       gsap.to(el, {
//                         rotateX,
//                         rotateY,
//                         duration: 0.1,
//                         ease: 'power2.out',
//                         transformPerspective: 1000
//                       });
//                     }

//                     if (enableMagnetism) {
//                       const magnetX = (x - centerX) * 0.05;
//                       const magnetY = (y - centerY) * 0.05;

//                       gsap.to(el, {
//                         x: magnetX,
//                         y: magnetY,
//                         duration: 0.3,
//                         ease: 'power2.out'
//                       });
//                     }
//                   };

//                   const handleMouseLeave = () => {
//                     if (shouldDisableAnimations) return;

//                     if (enableTilt) {
//                       gsap.to(el, {
//                         rotateX: 0,
//                         rotateY: 0,
//                         duration: 0.3,
//                         ease: 'power2.out'
//                       });
//                     }

//                     if (enableMagnetism) {
//                       gsap.to(el, {
//                         x: 0,
//                         y: 0,
//                         duration: 0.3,
//                         ease: 'power2.out'
//                       });
//                     }
//                   };

//                   const handleClick = (e: MouseEvent) => {
//                     if (!clickEffect || shouldDisableAnimations) return;

//                     const rect = el.getBoundingClientRect();
//                     const x = e.clientX - rect.left;
//                     const y = e.clientY - rect.top;

//                     const maxDistance = Math.max(
//                       Math.hypot(x, y),
//                       Math.hypot(x - rect.width, y),
//                       Math.hypot(x, y - rect.height),
//                       Math.hypot(x - rect.width, y - rect.height)
//                     );

//                     const ripple = document.createElement('div');
//                     ripple.style.cssText = `
//                       position: absolute;
//                       width: ${maxDistance * 2}px;
//                       height: ${maxDistance * 2}px;
//                       border-radius: 50%;
//                       background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
//                       left: ${x - maxDistance}px;
//                       top: ${y - maxDistance}px;
//                       pointer-events: none;
//                       z-index: 1000;
//                     `;

//                     el.appendChild(ripple);

//                     gsap.fromTo(
//                       ripple,
//                       {
//                         scale: 0,
//                         opacity: 1
//                       },
//                       {
//                         scale: 1,
//                         opacity: 0,
//                         duration: 0.8,
//                         ease: 'power2.out',
//                         onComplete: () => ripple.remove()
//                       }
//                     );
//                   };

//                   el.addEventListener('mousemove', handleMouseMove);
//                   el.addEventListener('mouseleave', handleMouseLeave);
//                   el.addEventListener('click', handleClick);
//                 }}
//               >
//                 <div className="card__header flex justify-between gap-3 relative text-white">
//                   <span className="card__label text-base">{card.label}</span>
//                 </div>
//                 <div className="card__content flex flex-col relative text-white">
//                   <h3 className={`card__title font-normal text-base m-0 mb-1 ${textAutoHide ? 'text-clamp-1' : ''}`}>
//                     {card.title}
//                   </h3>
//                   <p className={`card__description text-xs leading-5 opacity-90 ${textAutoHide ? 'text-clamp-2' : ''}`}>
//                     {card.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </BentoCardGrid>
//     </>
//   );
// };

// export default MagicBento;




import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   TYPES
========================================================= */

export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
}

export interface BentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

/* =========================================================
   DEFAULTS
========================================================= */

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "125, 160, 202";
const MOBILE_BREAKPOINT = 768;

/* =========================================================
   EVENT DATA
========================================================= */

const cardData: BentoCardProps[] = [
  {
    color: "#021024",
    title: "Technical Events",
    description:
      "Technical symposiums, competitions and innovation-driven events.",
    label: "EVENT 01",
  },
  {
    color: "#052659",
    title: "Workshops",
    description:
      "Hands-on learning sessions led by faculty and industry experts.",
    label: "EVENT 02",
  },
  {
    color: "#021024",
    title: "Hackathons",
    description:
      "Build, collaborate and solve real-world problems through technology.",
    label: "EVENT 03",
  },
  {
    color: "#052659",
    title: "Department Activities",
    description:
      "Academic, cultural and student-focused activities throughout the year.",
    label: "EVENT 04",
  },
];

/* =========================================================
   PARTICLE
========================================================= */

const createParticleElement = (
  x: number,
  y: number,
  color: string
): HTMLDivElement => {
  const element = document.createElement("div");

  element.className = "magic-particle";

  element.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 20;
    left: ${x}px;
    top: ${y}px;
  `;

  return element;
};

/* =========================================================
   SPOTLIGHT VALUES
========================================================= */

const calculateSpotlightValues = (
  radius: number
) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
});

/* =========================================================
   CARD GLOW
========================================================= */

const updateCardGlowProperties = (
  card: HTMLElement,
  mouseX: number,
  mouseY: number,
  glow: number,
  radius: number
) => {
  const rect =
    card.getBoundingClientRect();

  const relativeX =
    ((mouseX - rect.left) /
      rect.width) *
    100;

  const relativeY =
    ((mouseY - rect.top) /
      rect.height) *
    100;

  card.style.setProperty(
    "--glow-x",
    `${relativeX}%`
  );

  card.style.setProperty(
    "--glow-y",
    `${relativeY}%`
  );

  card.style.setProperty(
    "--glow-intensity",
    glow.toString()
  );

  card.style.setProperty(
    "--glow-radius",
    `${radius}px`
  );
};

/* =========================================================
   PARTICLE CARD
========================================================= */

const ParticleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}> = ({
  children,
  className = "",
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false,
}) => {
  const cardRef =
    useRef<HTMLDivElement>(null);

  const particlesRef =
    useRef<HTMLDivElement[]>([]);

  const timeoutsRef =
    useRef<
      ReturnType<typeof setTimeout>[]
    >([]);

  const isHoveredRef =
    useRef(false);

  const memoizedParticles =
    useRef<HTMLDivElement[]>([]);

  const particlesInitialized =
    useRef(false);

  const magnetismAnimationRef =
    useRef<gsap.core.Tween | null>(
      null
    );

  /* =======================================================
     INITIALIZE PARTICLES
  ======================================================= */

  const initializeParticles =
    useCallback(() => {
      if (
        particlesInitialized.current ||
        !cardRef.current
      ) {
        return;
      }

      const {
        width,
        height,
      } =
        cardRef.current.getBoundingClientRect();

      memoizedParticles.current =
        Array.from(
          {
            length: particleCount,
          },
          () =>
            createParticleElement(
              Math.random() * width,
              Math.random() * height,
              glowColor
            )
        );

      particlesInitialized.current =
        true;
    }, [
      particleCount,
      glowColor,
    ]);

  /* =======================================================
     CLEAR PARTICLES
  ======================================================= */

  const clearAllParticles =
    useCallback(() => {
      timeoutsRef.current.forEach(
        clearTimeout
      );

      timeoutsRef.current = [];

      magnetismAnimationRef.current?.kill();

      particlesRef.current.forEach(
        (particle) => {
          gsap.to(particle, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            ease: "back.in(1.7)",
            onComplete: () => {
              particle.parentNode?.removeChild(
                particle
              );
            },
          });
        }
      );

      particlesRef.current = [];
    }, []);

  /* =======================================================
     PARTICLE ANIMATION
  ======================================================= */

  const animateParticles =
    useCallback(() => {
      if (
        !cardRef.current ||
        !isHoveredRef.current
      ) {
        return;
      }

      if (
        !particlesInitialized.current
      ) {
        initializeParticles();
      }

      memoizedParticles.current.forEach(
        (particle, index) => {
          const timeoutId =
            setTimeout(() => {
              if (
                !isHoveredRef.current ||
                !cardRef.current
              ) {
                return;
              }

              const clone =
                particle.cloneNode(
                  true
                ) as HTMLDivElement;

              cardRef.current.appendChild(
                clone
              );

              particlesRef.current.push(
                clone
              );

              gsap.fromTo(
                clone,
                {
                  scale: 0,
                  opacity: 0,
                },
                {
                  scale: 1,
                  opacity: 1,
                  duration: 0.3,
                  ease: "back.out(1.7)",
                }
              );

              gsap.to(clone, {
                x:
                  (Math.random() - 0.5) *
                  100,

                y:
                  (Math.random() - 0.5) *
                  100,

                rotation:
                  Math.random() *
                  360,

                duration:
                  2 +
                  Math.random() * 2,

                ease: "none",

                repeat: -1,

                yoyo: true,
              });

              gsap.to(clone, {
                opacity: 0.3,

                duration: 1.5,

                ease: "power2.inOut",

                repeat: -1,

                yoyo: true,
              });
            }, index * 100);

          timeoutsRef.current.push(
            timeoutId
          );
        }
      );
    }, [initializeParticles]);

  /* =======================================================
     MOUSE INTERACTIONS
  ======================================================= */

  useEffect(() => {
    if (
      disableAnimations ||
      !cardRef.current
    ) {
      return;
    }

    const element =
      cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current =
        true;

      animateParticles();
    };

    const handleMouseLeave = () => {
      isHoveredRef.current =
        false;

      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseMove = (
      e: MouseEvent
    ) => {
      if (
        !enableTilt &&
        !enableMagnetism
      ) {
        return;
      }

      const rect =
        element.getBoundingClientRect();

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;

      /* -------------------------------
         TILT
      -------------------------------- */

      if (enableTilt) {
        const rotateX =
          ((y - centerY) /
            centerY) *
          -7;

        const rotateY =
          ((x - centerX) /
            centerX) *
          7;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.12,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }

      /* -------------------------------
         MAGNETISM
      -------------------------------- */

      if (enableMagnetism) {
        const magnetX =
          (x - centerX) *
          0.035;

        const magnetY =
          (y - centerY) *
          0.035;

        magnetismAnimationRef.current =
          gsap.to(element, {
            x: magnetX,
            y: magnetY,
            duration: 0.3,
            ease: "power2.out",
          });
      }
    };

    /* =====================================================
       CLICK RIPPLE
    ===================================================== */

    const handleClick = (
      e: MouseEvent
    ) => {
      if (!clickEffect) {
        return;
      }

      const rect =
        element.getBoundingClientRect();

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      const maxDistance =
        Math.max(
          Math.hypot(x, y),
          Math.hypot(
            x - rect.width,
            y
          ),
          Math.hypot(
            x,
            y - rect.height
          ),
          Math.hypot(
            x - rect.width,
            y - rect.height
          )
        );

      const ripple =
        document.createElement(
          "div"
        );

      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(
          circle,
          rgba(${glowColor}, 0.32) 0%,
          rgba(${glowColor}, 0.14) 30%,
          transparent 70%
        );
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 30;
      `;

      element.appendChild(
        ripple
      );

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1,
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () =>
            ripple.remove(),
        }
      );
    };

    element.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    element.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    element.addEventListener(
      "mousemove",
      handleMouseMove
    );

    element.addEventListener(
      "click",
      handleClick
    );

    return () => {
      isHoveredRef.current =
        false;

      element.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      element.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      element.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      element.removeEventListener(
        "click",
        handleClick
      );

      clearAllParticles();
    };
  }, [
    animateParticles,
    clearAllParticles,
    disableAnimations,
    enableTilt,
    enableMagnetism,
    clickEffect,
    glowColor,
  ]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{
        ...style,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

/* =========================================================
   GLOBAL SPOTLIGHT
========================================================= */

const GlobalSpotlight: React.FC<{
  gridRef: React.RefObject<
    HTMLDivElement | null
  >;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}> = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const spotlightRef =
    useRef<HTMLDivElement | null>(
      null
    );

  useEffect(() => {
    if (
      disableAnimations ||
      !gridRef?.current ||
      !enabled
    ) {
      return;
    }

    const spotlight =
      document.createElement(
        "div"
      );

    spotlight.className =
      "magic-global-spotlight";

    spotlight.style.cssText = `
      position: fixed;
      width: 650px;
      height: 650px;
      border-radius: 50%;
      pointer-events: none;

      background: radial-gradient(
        circle,
        rgba(${glowColor}, 0.07) 0%,
        rgba(${glowColor}, 0.035) 18%,
        rgba(${glowColor}, 0.015) 38%,
        transparent 68%
      );

      z-index: 4;
      opacity: 0;

      transform:
        translate(-50%, -50%);

      mix-blend-mode: normal;
    `;

    document.body.appendChild(
      spotlight
    );

    spotlightRef.current =
      spotlight;

    const handleMouseMove = (
      e: MouseEvent
    ) => {
      if (
        !spotlightRef.current ||
        !gridRef.current
      ) {
        return;
      }

      const section =
        gridRef.current.closest(
          ".magic-events-section"
        );

      const rect =
        section?.getBoundingClientRect();

      if (!rect) {
        return;
      }

      const mouseInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      const cards =
        gridRef.current.querySelectorAll(
          ".magic-event-card-inner"
        );

      if (!mouseInside) {
        gsap.to(
          spotlightRef.current,
          {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          }
        );

        cards.forEach(
          (card) => {
            (
              card as HTMLElement
            ).style.setProperty(
              "--glow-intensity",
              "0"
            );
          }
        );

        return;
      }

      const {
        proximity,
        fadeDistance,
      } =
        calculateSpotlightValues(
          spotlightRadius
        );

      let minDistance =
        Infinity;

      cards.forEach(
        (card) => {
          const cardElement =
            card as HTMLElement;

          const cardRect =
            cardElement.getBoundingClientRect();

          const centerX =
            cardRect.left +
            cardRect.width / 2;

          const centerY =
            cardRect.top +
            cardRect.height / 2;

          const distance =
            Math.hypot(
              e.clientX -
                centerX,
              e.clientY -
                centerY
            ) -
            Math.max(
              cardRect.width,
              cardRect.height
            ) /
              2;

          const effectiveDistance =
            Math.max(
              0,
              distance
            );

          minDistance =
            Math.min(
              minDistance,
              effectiveDistance
            );

          let glowIntensity =
            0;

          if (
            effectiveDistance <=
            proximity
          ) {
            glowIntensity =
              1;
          } else if (
            effectiveDistance <=
            fadeDistance
          ) {
            glowIntensity =
              (fadeDistance -
                effectiveDistance) /
              (fadeDistance -
                proximity);
          }

          updateCardGlowProperties(
            cardElement,
            e.clientX,
            e.clientY,
            glowIntensity,
            spotlightRadius
          );
        }
      );

      /*
       * Very subtle global light.
       * The actual glow belongs to the card.
       */

      gsap.to(
        spotlightRef.current,
        {
          left: e.clientX,
          top: e.clientY,
          duration: 0.12,
          ease: "power2.out",
        }
      );

      const targetOpacity =
        minDistance <=
        proximity
          ? 0.35
          : minDistance <=
            fadeDistance
          ? ((fadeDistance -
              minDistance) /
              (fadeDistance -
                proximity)) *
            0.35
          : 0;

      gsap.to(
        spotlightRef.current,
        {
          opacity:
            targetOpacity,

          duration:
            targetOpacity > 0
              ? 0.2
              : 0.4,

          ease: "power2.out",
        }
      );
    };

    document.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      document.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      spotlightRef.current?.remove();
    };
  }, [
    gridRef,
    disableAnimations,
    enabled,
    spotlightRadius,
    glowColor,
  ]);

  return null;
};

/* =========================================================
   MOBILE DETECTION
========================================================= */

const useMobileDetection =
  () => {
    const [isMobile, setIsMobile] =
      useState(false);

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(
          window.innerWidth <=
            MOBILE_BREAKPOINT
        );
      };

      checkMobile();

      window.addEventListener(
        "resize",
        checkMobile
      );

      return () =>
        window.removeEventListener(
          "resize",
          checkMobile
        );
    }, []);

    return isMobile;
  };

/* =========================================================
   MAGIC BENTO
========================================================= */

const MagicBento: React.FC<
  BentoProps
> = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = true,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
}) => {
  const gridRef =
    useRef<HTMLDivElement>(null);

  const cardsRef =
    useRef<HTMLDivElement[]>([]);

  const isMobile =
    useMobileDetection();

  const shouldDisableAnimations =
    disableAnimations ||
    isMobile;

  /* =======================================================
     SCROLL ENTRANCE

     IMPORTANT:
     NO PIN.
     NO ARTIFICIAL LONG SCROLL.

     The animation occupies only the actual
     Events section.
  ======================================================= */

useEffect(() => {
  if (
    shouldDisableAnimations ||
    !gridRef.current
  ) {
    return;
  }

  const cards =
    cardsRef.current.filter(Boolean);

  if (cards.length !== 4) {
    return;
  }

  const section =
    gridRef.current.closest(
      ".magic-events-section"
    ) as HTMLElement | null;

  if (!section) {
    return;
  }

  const context =
    gsap.context(() => {

      /* =====================================================
         INITIAL CARD POSITIONS
      ===================================================== */

      gsap.set(cards[0], {
        xPercent: -75,
        opacity: 0,
        scale: 0.94,
        rotate: -2,
      });

      gsap.set(cards[1], {
        xPercent: 75,
        opacity: 0,
        scale: 0.94,
        rotate: 2,
      });

      gsap.set(cards[2], {
        xPercent: -75,
        opacity: 0,
        scale: 0.94,
        rotate: -2,
      });

      gsap.set(cards[3], {
        xPercent: 75,
        opacity: 0,
        scale: 0.94,
        rotate: 2,
      });

      /* =====================================================
         MASTER EVENTS TIMELINE

         The entire Events section becomes pinned.

         While pinned:
         - PAGE DOES NOT MOVE
         - MOUSE WHEEL CONTROLS THE ANIMATION
         - CARDS ENTER ONE BY ONE

         After the final card:
         - small extra scroll breathing room
         - then section releases
      ===================================================== */

      const timeline =
        gsap.timeline({
          scrollTrigger: {
            trigger: section,

            /*
             * When the Events section reaches the top
             * of the viewport, lock it there.
             */
            start: "top top",

            /*
             * Total scroll distance while the
             * Events section is locked.
             *
             * 1800px gives enough room for the
             * four cards to enter smoothly.
             */
            end: "+=1800",

            /*
             * THIS IS THE IMPORTANT PART.
             *
             * The Events section stays fixed while
             * the user scrolls through the animation.
             */
            pin: true,

            /*
             * Smooth scroll-linked animation.
             */
            scrub: 1.8,

            /*
             * Prevent visible pin jump.
             */
            anticipatePin: 1,

            /*
             * Recalculate positions if the
             * viewport changes.
             */
            invalidateOnRefresh: true,

            /*
             * Keep the normal space occupied after
             * the pinned section finishes.
             */
            pinSpacing: true,
          },
        });

      /* =====================================================
         CARD 01
      ===================================================== */

      timeline.to(
        cards[0],
        {
          xPercent: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.4,
          ease: "power3.out",
        },
        0
      );

      /* =====================================================
         CARD 02
      ===================================================== */

      timeline.to(
        cards[1],
        {
          xPercent: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.4,
          ease: "power3.out",
        },
        0.75
      );

      /* =====================================================
         CARD 03
      ===================================================== */

      timeline.to(
        cards[2],
        {
          xPercent: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.4,
          ease: "power3.out",
        },
        1.5
      );

      /* =====================================================
         CARD 04
      ===================================================== */

      timeline.to(
        cards[3],
        {
          xPercent: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.4,
          ease: "power3.out",
        },
        2.25
      );

      /* =====================================================
         EXTRA SCROLL AFTER ALL 4 CARDS

         Nothing moves here.

         The cards remain completely visible while
         the user gets approximately another 1–2
         wheel movements before the next section.
      ===================================================== */

      timeline.to(
        {},
        {
          duration: 1.15,
          ease: "none",
        }
      );

    }, section);

    return () => {
      context.revert();
    };

  }, [shouldDisableAnimations]);

  return (
    <section className="magic-events-section">
      <style>
        {`
          /* =================================================
             SECTION
          ================================================= */

          .magic-events-section {
            --dark: #021024;
            --blue: #052659;
            --light-blue: #7DA0CA;
            --soft-blue: #C1E8FF;

  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 1;
}

          /* =================================================
             STAGE
          ================================================= */

          .magic-events-stage {
            min-height: 100vh;

            display: flex;
            align-items: center;
            justify-content: center;

            padding:
              5rem
              1.5rem
              6rem;
          }

          .magic-events-content {
            width:
              min(
                1120px,
                100%
              );

            margin:
              0 auto;

            position:
              relative;

            z-index:
              10;
          }

          /* =================================================
             HEADING
          ================================================= */

.magic-events-heading {
  text-align: center;
  margin-bottom: 2rem;
}

          .magic-events-eyebrow {
            display:
              block;

            margin-bottom:
              0.7rem;

            color:
              var(--light-blue);

            font-size:
              0.7rem;

            font-weight:
              700;

            letter-spacing:
              0.32em;

            text-transform:
              uppercase;
          }

          .magic-events-title {
            margin:
              0;

            color:
              var(--dark);

            font-size:
              clamp(
                3.5rem,
                7vw,
                6.5rem
              );

            line-height:
              0.9;

            letter-spacing:
              -0.07em;

            font-weight:
              700;
          }

          .magic-events-description {
            width:
              min(
                620px,
                100%
              );

            margin:
              1.25rem
              auto
              0;

            color:
              rgba(
                2,
                16,
                36,
                0.58
              );

            font-size:
              0.92rem;

            line-height:
              1.75;
          }

          /* =================================================
             GRID

             LEFT:
               BIG
               SMALL

             RIGHT:
               SMALL
               BIG
          ================================================= */

.magic-event-card:nth-child(1) {
  grid-column: 1 !important;
  grid-row: 1 / 3 !important;
}

.magic-event-card:nth-child(2) {
  grid-column: 2 !important;
  grid-row: 1 !important;
}

.magic-event-card:nth-child(3) {
  grid-column: 1 !important;
  grid-row: 3 !important;
}

.magic-event-card:nth-child(4) {
  grid-column: 2 !important;
  grid-row: 2 / 4 !important;
}
          /* =================================================
             CARD POSITIONS
          ================================================= */

          .magic-events-grid {
  width: 100%;
  height: 712px;

  display: grid;

  grid-template-columns:
    minmax(0, 1.08fr)
    minmax(0, 0.92fr);

  grid-template-rows:
    260px
    160px
    260px;

  gap: 16px;

  position: relative;
  perspective: 1400px;
}

/* ================================================
   BENTO LAYOUT
================================================ */

.magic-event-card:nth-child(1) {
  /* Large left */
  grid-column: 1;
  grid-row: 1 / 3;
}

.magic-event-card:nth-child(2) {
  /* Small top-right */
  grid-column: 2;
  grid-row: 1;
}

.magic-event-card:nth-child(3) {
  /* Small bottom-left */
  grid-column: 1;
  grid-row: 3;
}

.magic-event-card:nth-child(4) {
  /* Large right */
  grid-column: 2;
  grid-row: 2 / 4;
}

          /* =================================================
             CARD WRAPPER
          ================================================= */

          .magic-event-card {
            min-width:
              0;

            min-height:
              0;

            position:
              relative;

            will-change:
              transform,
              opacity;

            transform-style:
              preserve-3d;
          }

          /* =================================================
             CARD
          ================================================= */

          .magic-event-card-inner {
            width:
              100%;

            height:
              100%;

            position:
              relative;

            overflow:
              hidden;

            border-radius:
              28px;

            border:
              1px solid
              rgba(
                125,
                160,
                202,
                0.18
              );

            box-shadow:
              0
              15px
              45px
              rgba(
                2,
                16,
                36,
                0.08
              );

            transition:
              border-color
              0.3s ease,
              box-shadow
              0.3s ease;
          }

          /* =================================================
             LOCAL BORDER GLOW

             This is deliberately subtle.
          ================================================= */

          .magic-event-card-inner::after {
            content:
              "";

            position:
              absolute;

            inset:
              0;

            padding:
              1px;

            border-radius:
              inherit;

            background:
              radial-gradient(
                260px circle
                at
                var(--glow-x, 50%)
                var(--glow-y, 50%),
                rgba(
                  125,
                  160,
                  202,
                  calc(
                    var(--glow-intensity, 0)
                    * 0.8
                  )
                )
                0%,
                rgba(
                  125,
                  160,
                  202,
                  calc(
                    var(--glow-intensity, 0)
                    * 0.25
                  )
                )
                35%,
                transparent
                70%
              );

            -webkit-mask:
              linear-gradient(#fff 0 0)
              content-box,
              linear-gradient(#fff 0 0);

            -webkit-mask-composite:
              xor;

            mask:
              linear-gradient(#fff 0 0)
              content-box,
              linear-gradient(#fff 0 0);

            mask-composite:
              exclude;

            pointer-events:
              none;

            opacity:
              1;

            z-index:
              8;
          }

          .magic-event-card-inner:hover {
            border-color:
              rgba(
                125,
                160,
                202,
                0.42
              );

            box-shadow:
              0
              18px
              55px
              rgba(
                2,
                16,
                36,
                0.13
              );
          }

          /* =================================================
             CONTENT
          ================================================= */

          .magic-event-content {
            position:
              relative;

            z-index:
              5;

            width:
              100%;

            height:
              100%;

            display:
              flex;

            flex-direction:
              column;

            justify-content:
              flex-end;

            padding:
              2.25rem;
          }

          .magic-event-number {
            position:
              absolute;

            top:
              1.5rem;

            right:
              1.7rem;

            color:
              rgba(
                255,
                255,
                255,
                0.25
              );

            font-size:
              0.62rem;

            letter-spacing:
              0.22em;

            font-weight:
              600;
          }

          .magic-event-label {
            margin-bottom:
              0.6rem;

            color:
              var(--light-blue);

            font-size:
              0.6rem;

            font-weight:
              700;

            letter-spacing:
              0.25em;

            text-transform:
              uppercase;
          }

          .magic-event-title {
            margin:
              0;

            color:
              #ffffff;

            font-size:
              clamp(
                1.45rem,
                2.4vw,
                2.25rem
              );

            line-height:
              1.05;

            letter-spacing:
              -0.04em;

            font-weight:
              600;
          }

          .magic-event-description {
            max-width:
              520px;

            margin:
              0.7rem
              0
              0;

            color:
              rgba(
                255,
                255,
                255,
                0.62
              );

            font-size:
              0.75rem;

            line-height:
              1.6;
          }

          /* =================================================
             PARTICLES
          ================================================= */

          .magic-particle::before {
            content:
              "";

            position:
              absolute;

            inset:
              -2px;

            background:
              rgba(
                125,
                160,
                202,
                0.2
              );

            border-radius:
              50%;

            z-index:
              -1;
          }
/* =========================================================
   VIEW MORE — PREMIUM CTA
========================================================= */

.magic-events-more {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 34px;
  position: relative;
  z-index: 30;
}

/* Main button */
.magic-events-more-button {
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  min-width: 175px;
  height: 54px;
  padding: 0 22px;

  border: 1px solid rgba(2, 16, 36, 0.18);
  border-radius: 999px;

  background: #021024;
  color: #ffffff;

  text-decoration: none;

  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;

  overflow: hidden;
  isolation: isolate;

  box-shadow:
    0 10px 25px rgba(2, 16, 36, 0.12),
    0 2px 6px rgba(2, 16, 36, 0.08);

  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.45s ease,
    border-color 0.45s ease;
}

/* Animated blue light sweeping across button */
.magic-events-more-button::before {
  content: "";

  position: absolute;
  top: 0;
  left: -120%;

  width: 80%;
  height: 100%;

  background: linear-gradient(
    110deg,
    transparent 0%,
    rgba(125, 160, 202, 0.08) 35%,
    rgba(193, 232, 255, 0.28) 50%,
    rgba(125, 160, 202, 0.08) 65%,
    transparent 100%
  );

  transform: skewX(-18deg);

  transition:
    left 0.75s cubic-bezier(0.22, 1, 0.36, 1);

  pointer-events: none;
  z-index: -1;
}

/* Soft outer glow */
.magic-events-more-button::after {
  content: "";

  position: absolute;
  inset: -2px;

  border-radius: inherit;

  background: radial-gradient(
    circle at 50% 0%,
    rgba(125, 160, 202, 0.4),
    transparent 65%
  );

  opacity: 0;

  transition:
    opacity 0.4s ease;

  pointer-events: none;
  z-index: -2;
}

/* Text */
.magic-events-more-button > span:first-child {
  position: relative;
  z-index: 2;

  transition:
    letter-spacing 0.4s ease,
    transform 0.4s ease;
}

/* Arrow container */
.magic-events-more-arrow {
  position: relative;
  z-index: 2;

  width: 27px;
  height: 27px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.07);

  font-size: 0.85rem;
  line-height: 1;

  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.4s ease,
    border-color 0.4s ease;
}


/* =========================================================
   HOVER
========================================================= */

.magic-events-more-button:hover {
  transform: translateY(-5px);

  border-color: rgba(125, 160, 202, 0.55);

  box-shadow:
    0 18px 40px rgba(2, 16, 36, 0.18),
    0 0 35px rgba(125, 160, 202, 0.16);
}

.magic-events-more-button:hover::before {
  left: 140%;
}

.magic-events-more-button:hover::after {
  opacity: 1;
}

.magic-events-more-button:hover > span:first-child {
  letter-spacing: 0.2em;
  transform: translateX(-2px);
}

.magic-events-more-button:hover .magic-events-more-arrow {
  transform: translate(4px, -4px) rotate(0deg);

  background: rgba(193, 232, 255, 0.16);

  border-color: rgba(193, 232, 255, 0.45);
}


/* =========================================================
   ACTIVE / CLICK
========================================================= */

.magic-events-more-button:active {
  transform: translateY(-1px) scale(0.97);

  box-shadow:
    0 8px 20px rgba(2, 16, 36, 0.16);
}


/* =========================================================
   KEYBOARD ACCESSIBILITY
========================================================= */

.magic-events-more-button:focus-visible {
  outline: none;

  box-shadow:
    0 0 0 3px rgba(193, 232, 255, 0.7),
    0 12px 30px rgba(2, 16, 36, 0.15);
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 767px) {
  .magic-events-more {
    margin-top: 26px;
  }

  .magic-events-more-button {
    min-width: 160px;
    height: 50px;
    padding: 0 18px;

    font-size: 0.68rem;
    letter-spacing: 0.13em;
  }

  .magic-events-more-arrow {
    width: 25px;
    height: 25px;
  }
}
          /* =================================================
             TABLET
          ================================================= */

          @media (max-width: 900px) {

            .magic-events-stage {
              padding:
                4rem
                1rem
                5rem;
            }

            .magic-events-grid {
              height:
                560px;
            }

            .magic-event-content {
              padding:
                1.7rem;
            }
          }

          /* =================================================
             MOBILE
          ================================================= */

         @media (max-width: 767px) {

  .magic-events-stage {
    min-height: auto;
    padding: 5rem 1rem 6rem;
  }

  .magic-events-heading {
    margin-bottom: 2.5rem;
  }

  .magic-events-title {
    font-size: 3.8rem;
  }

  .magic-events-grid {
    height: auto;

    display: flex;

    flex-direction: column;

    gap: 12px;
  }

  .magic-event-card:nth-child(1),
  .magic-event-card:nth-child(2),
  .magic-event-card:nth-child(3),
  .magic-event-card:nth-child(4) {
    grid-column: auto;
    grid-row: auto;

    height: 230px;
  }

  .magic-event-content {
    padding: 1.5rem;
  }

  .magic-event-title {
    font-size: 1.4rem;
  }

  .magic-event-description {
    font-size: 0.7rem;
  }
}
          }
        `}
      </style>

      {/* =====================================================
          GLOBAL SPOTLIGHT
      ===================================================== */}

      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={
            shouldDisableAnimations
          }
          enabled={
            enableSpotlight
          }
          spotlightRadius={
            spotlightRadius
          }
          glowColor={
            glowColor
          }
        />
      )}

      {/* =====================================================
          EVENTS STAGE
      ===================================================== */}

      <div className="magic-events-stage">

        <div className="magic-events-content">

          {/* =================================================
              HEADING
          ================================================= */}

          <div className="magic-events-heading">
  <h2 className="magic-events-title">
    Events Hosted
  </h2>
</div>

          {/* =================================================
              BENTO GRID
          ================================================= */}

          <div
            ref={gridRef}
            className="magic-events-grid"
          >

            {cardData.map(
              (card, index) => {

                const cardStyle =
                  {
                    backgroundColor:
                      card.color ||
                      "#021024",
                  } as React.CSSProperties;

                if (
                  enableStars
                ) {
                  return (
                    <div
                      key={index}
                      ref={(element) => {
                        if (element) {
                          cardsRef.current[
                            index
                          ] = element;
                        }
                      }}
                      className="magic-event-card"
                    >

                      <ParticleCard
                        className="magic-event-card-inner"
                        style={
                          cardStyle
                        }
                        disableAnimations={
                          shouldDisableAnimations
                        }
                        particleCount={
                          particleCount
                        }
                        glowColor={
                          glowColor
                        }
                        enableTilt={
                          enableTilt
                        }
                        clickEffect={
                          clickEffect
                        }
                        enableMagnetism={
                          enableMagnetism
                        }
                      >

                        <div className="magic-event-content">

                          <span className="magic-event-number">
                            0{index + 1}
                          </span>

                          <span className="magic-event-label">
                            {card.label}
                          </span>

                          <h3 className="magic-event-title">
                            {card.title}
                          </h3>

                          <p
                            className={
                              `magic-event-description ${
                                textAutoHide
                                  ? "magic-text-limit"
                                  : ""
                              }`
                            }
                          >
                            {
                              card.description
                            }
                          </p>

                        </div>

                      </ParticleCard>

                    </div>
                  );
                }

                return (
                  <div
                    key={index}
                    ref={(element) => {
                      if (element) {
                        cardsRef.current[
                          index
                        ] = element;
                      }
                    }}
                    className="magic-event-card"
                  >

                    <div
                      className="magic-event-card-inner"
                      style={
                        cardStyle
                      }
                    >

                      <div className="magic-event-content">

                        <span className="magic-event-number">
                          0{index + 1}
                        </span>

                        <span className="magic-event-label">
                          {card.label}
                        </span>

                        <h3 className="magic-event-title">
                          {card.title}
                        </h3>

                        <p className="magic-event-description">
                          {
                            card.description
                          }
                        </p>

                      </div>

                    </div>

                  </div>
                );
              }
            )}



          </div>

          <div className="magic-events-more">
            <Link
              to="/events"
              className="magic-events-more-button"
            >
              <span>View More</span>
              <span className="magic-events-more-arrow">↗</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MagicBento;