import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  init() {
    this.setViewportHeight();
    window.addEventListener('resize', this.setViewportHeight.bind(this));
  }

  private setViewportHeight() {
    const vh = window.innerHeight;
    document.body.style.height = `${vh}px`;
  }
}
