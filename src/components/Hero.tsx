@@ .. @@
 import React, { useState, useEffect, useRef, useCallback } from 'react';
 import { useInteraction } from '../context/InteractionContext';
+import ScramblingHeading from './ScramblingHeading';

-interface HeroProps {
-    scrollToContact: () => void;
-}
-
 // --- Particle Class for Hero Canvas ---
@@ .. @@
         this.vx = (Math.random() - 0.5) * 0.5;
         this.vy = (Math.random() - 0.5) * 0.5;
-        this.color = { r: 244, g: 63, b: 94 }; // brand-chaos
+        this.color = { r: 224, g: 41, b: 151 }; // architect-magenta
         this.ease = 0.05 + Math.random() * 0.05;
     }
@@ .. @@
         if (!isAnalyzed && dist < mouse.radius) {
             const proximity = 1 - (dist / mouse.radius); // 0 (edge) to 1 (center)
             
-            // Blend color towards accent purple
-            const accentColor = { r: 129, g: 140, b: 248 }; // brand-accent
+            // Blend color towards cyan
+            const accentColor = { r: 100, g: 255, b: 218 }; // architect-cyan
             const r = this.color.r + (accentColor.r - this.color.r) * proximity * 0.8;
             const g = this.color.g + (accentColor.g - this.color.g) * proximity * 0.8;
             const b = this.color.b + (accentColor.b - this.color.b) * proximity * 0.8;
@@ .. @@
 }


-const Hero: React.FC<HeroProps> = ({ scrollToContact }) => {
+const Hero: React.FC = () => {
     const { setIsHovering } = useInteraction();
     const [isAnalyzed, setIsAnalyzed] = useState(false);
+    const [currentPhase, setCurrentPhase] = useState<'chaos' | 'processing' | 'clarity'>('chaos');
     const heroRef = useRef<HTMLElement>(null);
@@ .. @@
         const kpi1Target = {
             x: kpi1Rect.left - heroRect.left,
             y: kpi1Rect.top - heroRect.top,
             width: kpi1Rect.width,
             height: kpi1Rect.height,
-            color: { r: 52, g: 211, b: 153 } // brand-clarity
+            color: { r: 100, g: 255, b: 218 } // architect-cyan
         };
         const kpi2Target = {
             x: kpi2Rect.left - heroRect.left,
             y: kpi2Rect.top - heroRect.top,
             width: kpi2Rect.width,
             height: kpi2Rect.height,
-            color: { r: 244, g: 63, b: 94 } // brand-chaos
+            color: { r: 224, g: 41, b: 151 } // architect-magenta
         };

         particlesRef.current.forEach((p, i) => {
@@ .. @@
             
             p.setTarget(targetX, targetY, target.color);
         });
+
+        // Phase progression
+        setCurrentPhase('processing');
+        setTimeout(() => setCurrentPhase('clarity'), 1000);
     };

     return (
         <section
             ref={heroRef}
             onClick={handleClick}
-            className="h-screen flex flex-col items-center justify-center p-8 lg:p-16 relative overflow-hidden"
+            className="h-screen flex flex-col items-center justify-center p-8 lg:p-16 relative overflow-hidden bg-gradient-to-br from-architect-dark via-architect-dark to-architect-surface"
         >
             <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
             
-            <div className={`absolute transition-opacity duration-500 ${!isAnalyzed ? 'opacity-100' : 'opacity-0'}`}>
-                <p className="font-roboto-mono text-brand-accent animate-pulse">Initiate Analysis</p>
+            {/* Phase Indicators */}
+            <div className="absolute top-8 right-8 flex flex-col space-y-2">
+                <div className={`w-3 h-3 rounded-full transition-all duration-500 ${currentPhase === 'chaos' ? 'bg-architect-magenta shadow-[0_0_10px_theme(colors.architect.magenta)]' : 'bg-architect-surface'}`} />
+                <div className={`w-3 h-3 rounded-full transition-all duration-500 ${currentPhase === 'processing' ? 'bg-architect-gold shadow-[0_0_10px_theme(colors.architect.gold)]' : 'bg-architect-surface'}`} />
+                <div className={`w-3 h-3 rounded-full transition-all duration-500 ${currentPhase === 'clarity' ? 'bg-architect-cyan shadow-[0_0_10px_theme(colors.architect.cyan)]' : 'bg-architect-surface'}`} />
+            </div>
+            
+            <div className={`absolute top-1/3 transition-opacity duration-500 ${!isAnalyzed ? 'opacity-100' : 'opacity-0'}`}>
+                <div className="text-center">
+                    <p className="font-roboto-mono text-architect-cyan animate-pulse mb-4 text-lg">[ INITIALIZING DATA ANALYSIS ]</p>
+                    <div className="flex space-x-1 justify-center">
+                        {[...Array(5)].map((_, i) => (
+                            <div key={i} className={`w-2 h-8 bg-architect-cyan animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }} />
+                        ))}
+                    </div>
+                </div>
             </div>
             
             <div className="z-10 text-center w-full max-w-4xl">
-                <h1 className={`font-poppins text-5xl md:text-7xl font-bold mb-4 transition-all duration-700 ${!isAnalyzed ? 'animate-glitch-subtle text-brand-chaos/80' : 'text-brand-text'}`}>
-                    Find the Signal.
-                </h1>
+                <div className="mb-8">
+                    <ScramblingHeading 
+                        text={!isAnalyzed ? "CHAOS.DETECTED" : "SIGNAL.FOUND"} 
+                        className={`font-poppins text-5xl md:text-7xl font-bold transition-all duration-700 ${
+                            !isAnalyzed 
+                                ? 'text-architect-magenta animate-glitch-subtle' 
+                                : 'text-transparent bg-clip-text bg-gradient-to-r from-architect-cyan to-architect-gold'
+                        }`}
+                    />
+                </div>
                 
                 <div className={`transition-opacity duration-700 delay-500 ${isAnalyzed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
-                    <p className="text-lg md:text-xl text-brand-text max-w-xl mx-auto my-8">
-                        I decode complex business data into actionable insights that drive growth and eliminate waste.
+                    <p className="text-lg md:text-xl text-architect-text max-w-2xl mx-auto my-8 font-inter">
+                        I architect data solutions that transform operational chaos into strategic clarity. 
+                        <span className="text-architect-cyan font-semibold"> Every dataset tells a story</span> — 
+                        I help you write the ending.
                     </p>
                 </div>
                 
                 <div className="flex justify-center space-x-8 mb-8 h-28">
-                    <div ref={kpi1Ref} className={`bg-brand-surface/0 p-4 rounded-lg border border-transparent transition-all duration-500 delay-1000 ${isAnalyzed ? 'border-brand-border bg-brand-surface/50' : ''}`}>
+                    <div ref={kpi1Ref} className={`bg-architect-surface/0 p-6 rounded-lg border border-transparent transition-all duration-500 delay-1000 backdrop-blur-sm ${isAnalyzed ? 'border-architect-cyan/30 bg-architect-surface/50 shadow-[0_0_20px_theme(colors.architect.cyan/20)]' : ''}`}>
                          <div className={`transition-opacity duration-500 delay-[1500ms] ${isAnalyzed ? 'opacity-100' : 'opacity-0'}`}>
-                            <p className="font-roboto-mono text-3xl text-brand-clarity">+45%</p>
-                            <p className="text-sm">Efficiency Gain</p>
+                            <p className="font-roboto-mono text-3xl text-architect-cyan font-bold">+67%</p>
+                            <p className="text-sm text-architect-text/80">Process Efficiency</p>
                         </div>
                     </div>
-                    <div ref={kpi2Ref} className={`bg-brand-surface/0 p-4 rounded-lg border border-transparent transition-all duration-500 delay-1000 ${isAnalyzed ? 'border-brand-border bg-brand-surface/50' : ''}`}>
+                    <div ref={kpi2Ref} className={`bg-architect-surface/0 p-6 rounded-lg border border-transparent transition-all duration-500 delay-1000 backdrop-blur-sm ${isAnalyzed ? 'border-architect-magenta/30 bg-architect-surface/50 shadow-[0_0_20px_theme(colors.architect.magenta/20)]' : ''}`}>
                         <div className={`transition-opacity duration-500 delay-[1500ms] ${isAnalyzed ? 'opacity-100' : 'opacity-0'}`}>
-                            <p className="font-roboto-mono text-3xl text-brand-chaos">-30%</p>
-                            <p className="text-sm">Operational Costs</p>
+                            <p className="font-roboto-mono text-3xl text-architect-magenta font-bold">-42%</p>
+                            <p className="text-sm text-architect-text/80">Manual Overhead</p>
                         </div>
                     </div>
                 </div>
                 
                 <div className={`transition-opacity duration-700 delay-[1200ms] ${isAnalyzed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
-                    <button
-                        onClick={e => { e.stopPropagation(); scrollToContact(); }}
+                    <a
+                        href="/contact"
                         onMouseEnter={() => setIsHovering(true)}
                         onMouseLeave={() => setIsHovering(false)}
-                        className="text-white font-bold font-poppins py-3 px-8 rounded-lg transform transition-all duration-500 hover:scale-105 bg-gradient-to-r from-brand-cta to-yellow-400 bg-[length:200%_auto] hover:bg-[position:100%_0] focus:bg-[position:100%_0]"
+                        className="inline-block text-architect-dark font-bold font-poppins py-4 px-8 rounded-lg transform transition-all duration-500 hover:scale-105 bg-gradient-to-r from-architect-cyan to-architect-gold hover:shadow-[0_0_30px_theme(colors.architect.cyan)] focus:shadow-[0_0_30px_theme(colors.architect.cyan)] border border-architect-cyan/30"
                     >
-                        Decode Your Business Potential?
-                    </button>
+                        <span className="flex items-center space-x-2">
+                            <span>ARCHITECT MY DATA SOLUTION</span>
+                            <span className="text-xl">→</span>
+                        </span>
+                    </a>
                 </div>
             </div>
         </section>