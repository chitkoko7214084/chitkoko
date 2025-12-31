import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../App.vue';

describe('App.vue', () => {
  describe('Navigation', () => {
    it('renders navigation bar', () => {
      const wrapper = mount(App);
      const nav = wrapper.find('nav');
      expect(nav.exists()).toBe(true);
    });

    it('has navigation links', () => {
      const wrapper = mount(App);
      const links = wrapper.findAll('nav a');
      expect(links.length).toBeGreaterThan(0);
    });
  });

  describe('Hero Section', () => {
    it('renders hero section', () => {
      const wrapper = mount(App);
      const heroSection = wrapper.find('#home');
      expect(heroSection.exists()).toBe(true);
    });

    it('displays profile image', () => {
      const wrapper = mount(App);
      const img = wrapper.find('img');
      expect(img.exists()).toBe(true);
      expect(img.attributes('src')).toContain('profile.jpg');
    });

    it('shows welcome message', () => {
      const wrapper = mount(App);
      const html = wrapper.html();
      expect(html).toContain('Hi, everyone');
      expect(html).toContain('Web Developer');
    });
  });

  describe('About Section', () => {
    it('renders about section', () => {
      const wrapper = mount(App);
      const aboutSection = wrapper.find('#about');
      expect(aboutSection.exists()).toBe(true);
    });

    it('displays skills', () => {
      const wrapper = mount(App);
      const html = wrapper.html();
      expect(html).toContain('Vue.js');
      expect(html).toContain('JavaScript');
    });
  });

  describe('Education Section', () => {
    it('renders education section', () => {
      const wrapper = mount(App);
      const educationSection = wrapper.find('#education');
      expect(educationSection.exists()).toBe(true);
    });
  });

  describe('Resume Section', () => {
    it('renders resume section', () => {
      const wrapper = mount(App);
      const resumeSection = wrapper.find('#resume');
      expect(resumeSection.exists()).toBe(true);
    });

    it('has download button', () => {
      const wrapper = mount(App);
      const downloadLink = wrapper.find('a[download]');
      expect(downloadLink.exists()).toBe(true);
    });
  });

  describe('Projects Section', () => {
    it('renders projects section', () => {
      const wrapper = mount(App);
      const projectsSection = wrapper.find('#projects');
      expect(projectsSection.exists()).toBe(true);
    });

    it('displays projects', () => {
      const wrapper = mount(App);
      const html = wrapper.html();
      expect(html).toContain('My Projects');
    });
  });

  describe('Contact Section', () => {
    it('renders contact section', () => {
      const wrapper = mount(App);
      const contactSection = wrapper.find('#contact');
      expect(contactSection.exists()).toBe(true);
    });

    it('has social media links', () => {
      const wrapper = mount(App);
      const html = wrapper.html();
      expect(html).toContain('github.com');
      expect(html).toContain('linkedin.com');
    });
  });

  describe('Footer', () => {
    it('renders footer', () => {
      const wrapper = mount(App);
      const footer = wrapper.find('footer');
      expect(footer.exists()).toBe(true);
      expect(footer.text()).toContain('2025');
    });
  });
});

