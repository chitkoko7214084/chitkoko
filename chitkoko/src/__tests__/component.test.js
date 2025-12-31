import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../App.vue';

describe('Integration Tests', () => {
  describe('Page Sections', () => {
    it('all main sections are present', () => {
      const wrapper = mount(App);
      
      expect(wrapper.find('#home').exists()).toBe(true);
      expect(wrapper.find('#about').exists()).toBe(true);
      expect(wrapper.find('#education').exists()).toBe(true);
      expect(wrapper.find('#resume').exists()).toBe(true);
      expect(wrapper.find('#projects').exists()).toBe(true);
      expect(wrapper.find('#contact').exists()).toBe(true);
    });
  });

  describe('Navigation Links', () => {
    it('navigation contains all section links', () => {
      const wrapper = mount(App);
      const navLinks = wrapper.findAll('nav a');
      const hrefs = navLinks.map(link => link.attributes('href'));
      
      expect(hrefs.some(href => href === '#home')).toBe(true);
      expect(hrefs.some(href => href === '#about')).toBe(true);
      expect(hrefs.some(href => href === '#contact')).toBe(true);
    });
  });

  describe('External Links', () => {
    it('has working project links', () => {
      const wrapper = mount(App);
      const externalLinks = wrapper.findAll('a[href^="http"]');
      
      expect(externalLinks.length).toBeGreaterThan(0);
    });

    it('social media links exist', () => {
      const wrapper = mount(App);
      const html = wrapper.html();
      
      expect(html).toContain('github.com');
      expect(html).toContain('linkedin.com');
    });
  });

  describe('Responsive Design', () => {
    it('uses responsive Tailwind classes', () => {
      const wrapper = mount(App);
      const html = wrapper.html();
      
      expect(html).toContain('md:');
      expect(html).toContain('lg:');
    });
  });

  describe('Content Verification', () => {
    it('has proper content structure', () => {
      const wrapper = mount(App);
      const html = wrapper.html();
      
      expect(html).toContain('Chit Ko Ko');
      expect(html).toContain('Education');
      expect(html).toContain('Work Experience');
    });
  });

  describe('Styling', () => {
    it('uses Tailwind CSS classes', () => {
      const wrapper = mount(App);
      const html = wrapper.html();
      
      expect(html).toContain('bg-');
      expect(html).toContain('text-');
      expect(html).toContain('hover:');
      expect(html).toContain('transition');
    });
  });
});
