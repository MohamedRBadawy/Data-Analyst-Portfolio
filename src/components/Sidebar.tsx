@@ .. @@
 import React from 'react';
+import { Link, useLocation } from 'react-router-dom';
 import { HomeIcon, LightBulbIcon, BriefcaseIcon, CogIcon, UserIcon, MailIcon, ChartBarIcon, DocumentTextIcon, ToolkitIcon } from '../constants';

-interface SidebarProps {
-    scrollToSection: (section: 'home' | 'solutions' | 'toolkit' | 'cases' | 'industries' | 'about' | 'blog' | 'contact') => void;
-}
-
-const navItems = [
-    { icon: <HomeIcon />, label: 'Home', section: 'home' as const },
-    { icon: <LightBulbIcon />, label: 'Solutions', section: 'solutions' as const },
-    { icon: <ToolkitIcon />, label: 'My Toolkit', section: 'toolkit' as const },
-    { icon: <BriefcaseIcon />, label: 'Case Studies', section: 'cases' as const },
-    { icon: <CogIcon />, label: 'Industries', section: 'industries' as const },
-    { icon: <UserIcon />, label: 'About Me', section: 'about' as const },
-    { icon: <DocumentTextIcon />, label: 'Blog', section: 'blog' as const },
-    { icon: <MailIcon />, label: 'Contact', section: 'contact' as const },
+const navItems = [
+    { icon: <HomeIcon />, label: 'Home', path: '/' },
+    { icon: <BriefcaseIcon />, label: 'Projects', path: '/projects' },
+    { icon: <DocumentTextIcon />, label: 'Blog', path: '/blog' },
+    { icon: <ToolkitIcon />, label: 'Resources', path: '/resources' },
+    { icon: <MailIcon />, label: 'Contact', path: '/contact' },
 ];

-const getAnimationClass = (section: string) => {
-    switch (section) {
-        case 'solutions':
+const getAnimationClass = (path: string) => {
+    switch (path) {
+        case '/':
             return 'group-hover:animate-icon-glow';
-        case 'cases':
+        case '/projects':
             return 'group-hover:animate-icon-bounce';
-        case 'industries':
+        case '/blog':
             return 'group-hover:animate-icon-rotate';
         default:
             return '';
@@ .. @@
 };

-const Sidebar: React.FC<SidebarProps> = ({ scrollToSection }) => {
+const Sidebar: React.FC = () => {
+    const location = useLocation();
+
     return (
-        <aside className="fixed top-0 left-0 h-full w-20 bg-brand-bg/80 backdrop-blur-sm border-r border-brand-border z-50 hidden lg:flex flex-col items-center justify-between py-6">
+        <aside className="fixed top-0 left-0 h-full w-20 bg-architect-dark/90 backdrop-blur-sm border-r border-architect-cyan/30 z-50 hidden lg:flex flex-col items-center justify-between py-6">
             <div className="flex flex-col items-center space-y-6">
-                <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center font-poppins font-bold text-xl text-white">MB</div>
+                <Link to="/" className="w-12 h-12 bg-gradient-to-br from-architect-cyan to-architect-magenta rounded-lg flex items-center justify-center font-poppins font-bold text-xl text-white hover:scale-110 transition-transform duration-300">
+                    <span className="animate-pulse">DA</span>
+                </Link>
                 <nav>
                     <ul className="space-y-4">
                         {navItems.map((item) => {
                              const iconWithAnimation = React.cloneElement(item.icon, { 
-                                className: `w-6 h-6 transition-transform duration-300 ${getAnimationClass(item.section)}` 
+                                className: `w-6 h-6 transition-transform duration-300 ${getAnimationClass(item.path)}` 
                             });
+                            const isActive = location.pathname === item.path;
                             return (
                                 <li key={item.label} className="group relative">
-                                    <button
-                                        onClick={() => scrollToSection(item.section)}
-                                        className="p-3 rounded-lg text-brand-text/60 hover:bg-brand-accent/20 hover:text-white transition-all duration-300"
+                                    <Link
+                                        to={item.path}
+                                        className={`p-3 rounded-lg transition-all duration-300 ${
+                                            isActive 
+                                                ? 'bg-architect-cyan/20 text-architect-cyan shadow-[0_0_10px_theme(colors.architect.cyan)]' 
+                                                : 'text-architect-text/60 hover:bg-architect-cyan/10 hover:text-architect-cyan'
+                                        }`}
                                         aria-label={item.label}
                                     >
                                         {iconWithAnimation}
-                                    </button>
-                                    <span className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-3 py-1 bg-brand-surface border border-brand-border rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
+                                    </Link>
+                                    <span className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-3 py-1 bg-architect-surface border border-architect-cyan/30 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
                                         {item.label}
                                     </span>
                                 </li>
@@ .. @@
             </div>
             <div className="group relative text-center">
-                 <div className="p-3 rounded-lg text-brand-text/60 group-hover:text-white transition-all duration-300">
+                 <div className="p-3 rounded-lg text-architect-text/60 group-hover:text-architect-cyan transition-all duration-300">
                     <ChartBarIcon />
                 </div>
-                <div className="absolute left-full bottom-0 ml-4 px-4 py-2 bg-brand-surface border border-brand-border rounded-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-48 text-left">
+                <div className="absolute left-full bottom-0 ml-4 px-4 py-2 bg-architect-surface border border-architect-cyan/30 rounded-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-48 text-left shadow-lg">
                     <p className="font-roboto-mono">K Line Europe: 2023-Now</p>
                     <p className="font-roboto-mono">Expack Shipping: 2018-22</p>
-                    <p className="font-roboto-mono">Skills: Looker, G-Sheets</p>
+                    <p className="font-roboto-mono text-architect-cyan">Skills: Looker, G-Sheets</p>
                 </div>
             </div>
         </aside>