<template>
    <div
      class="window"
      :style="styleObject"
      @mousedown.self="bringToFront"
    >
      <div
        class="window-header"
        @mousedown="startDrag"
      >
        <span class="close-btn" @click="$emit('close')"></span>
        <span class="min-btn"></span>
        <span class="max-btn"></span>
        <span class="title">{{ title }}</span>
      </div>
      <div class="window-body">
        <slot />
      </div>
      <div class="resize-handle" @mousedown="startResize"></div>
    </div>
  </template>
  
  <script>
  let zCounter = 100;
  
  export default {
    name: "Window",
    props: {
      title: { type: String, default: "Window" }
    },
    data() {
      return {
        top: 120,
        left: 120,
        width: 600,
        height: 400,
        isDragging: false,
        isResizing: false,
        offsetX: 0,
        offsetY: 0,
        startW: 0,
        startH: 0,
        startX: 0,
        startY: 0,
        zIndex: zCounter++
      };
    },
    computed: {
      styleObject() {
        return {
          top: this.top + "px",
          left: this.left + "px",
          width: this.width + "px",
          height: this.height + "px",
          zIndex: this.zIndex
        };
      }
    },
    methods: {
      bringToFront() {
        this.zIndex = ++zCounter;
      },
      startDrag(e) {
        this.isDragging = true;
        this.offsetX = e.clientX - this.left;
        this.offsetY = e.clientY - this.top;
        document.addEventListener("mousemove", this.onDrag);
        document.addEventListener("mouseup", this.stopDrag);
      },
      onDrag(e) {
        if (this.isDragging) {
          this.left = e.clientX - this.offsetX;
          this.top = e.clientY - this.offsetY;
        }
      },
      stopDrag() {
        this.isDragging = false;
        document.removeEventListener("mousemove", this.onDrag);
        document.removeEventListener("mouseup", this.stopDrag);
      },
      startResize(e) {
        this.isResizing = true;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.startW = this.width;
        this.startH = this.height;
        document.addEventListener("mousemove", this.onResize);
        document.addEventListener("mouseup", this.stopResize);
      },
      onResize(e) {
        if (this.isResizing) {
          this.width = this.startW + (e.clientX - this.startX);
          this.height = this.startH + (e.clientY - this.startY);
        }
      },
      stopResize() {
        this.isResizing = false;
        document.removeEventListener("mousemove", this.onResize);
        document.removeEventListener("mouseup", this.stopResize);
      }
    }
  };
  </script>
  
  <style scoped>
  .window {
    position: absolute;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    resize: both;
  }
  .window-header {
    display: flex;
    align-items: center;
    height: 32px;
    background: #e0e0e0;
    padding: 0 10px;
    gap: 8px;
    cursor: move;
  }
  .close-btn,
  .min-btn,
  .max-btn {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
  }
  .close-btn { background: #ff5f56; }
  .min-btn { background: #ffbd2e; }
  .max-btn { background: #27c93f; }
  .title {
    margin-left: 8px;
    font-weight: bold;
    font-size: 13px;
  }
  .window-body {
    flex: 1;
    padding: 20px;
    overflow: auto;
  }
  .resize-handle {
    width: 12px;
    height: 12px;
    background: transparent;
    position: absolute;
    right: 2px;
    bottom: 2px;
    cursor: se-resize;
  }
  </style>
  