import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

describe('GitIgnore Configuration', () => {
  const gitignorePath = resolve(__dirname, '../../.gitignore');
  
  it('should have a .gitignore file', () => {
    expect(existsSync(gitignorePath)).toBe(true);
  });

  it('should ignore .env file', () => {
    const gitignoreContent = readFileSync(gitignorePath, 'utf-8');
    expect(gitignoreContent).toContain('.env');
  });

  it('should ignore all .env.* files', () => {
    const gitignoreContent = readFileSync(gitignorePath, 'utf-8');
    expect(gitignoreContent).toMatch(/\.env\.\*/);
  });

  it('should ignore node_modules directory', () => {
    const gitignoreContent = readFileSync(gitignorePath, 'utf-8');
    expect(gitignoreContent).toContain('node_modules');
  });

  it('should ignore dist directory', () => {
    const gitignoreContent = readFileSync(gitignorePath, 'utf-8');
    expect(gitignoreContent).toContain('dist');
  });

  it('should ignore coverage directory', () => {
    const gitignoreContent = readFileSync(gitignorePath, 'utf-8');
    expect(gitignoreContent).toContain('coverage');
  });

  it('should have .env.example file for reference', () => {
    const envExamplePath = resolve(__dirname, '../../.env.example');
    expect(existsSync(envExamplePath)).toBe(true);
  });

  it('.env.example should contain Firebase variable templates', () => {
    const envExamplePath = resolve(__dirname, '../../.env.example');
    const envExampleContent = readFileSync(envExamplePath, 'utf-8');
    
    expect(envExampleContent).toContain('VITE_FIREBASE_API_KEY');
    expect(envExampleContent).toContain('VITE_FIREBASE_AUTH_DOMAIN');
    expect(envExampleContent).toContain('VITE_FIREBASE_PROJECT_ID');
    expect(envExampleContent).toContain('VITE_FIREBASE_STORAGE_BUCKET');
    expect(envExampleContent).toContain('VITE_FIREBASE_MESSAGING_SENDER_ID');
    expect(envExampleContent).toContain('VITE_FIREBASE_APP_ID');
    expect(envExampleContent).toContain('VITE_FIREBASE_MEASUREMENT_ID');
  });
});
