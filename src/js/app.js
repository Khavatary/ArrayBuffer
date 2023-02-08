export default class ArrayBufferConverter {
  constructor(data) {
    this.data = data;
    this.bufferView = new Uint16Array(new ArrayBuffer(data.length * 2));
    this.string = String();
  }

  load() {
    for (let i = 0; i < this.bufferView.length; i += 1) {
      this.bufferView[i] = this.data.charCodeAt(i);
    }
    return this.bufferView;
  }

  toString() {
    for (let i = 0; i < this.bufferView.length; i += 1) {
      this.string += String.fromCharCode(this.bufferView[i]);
    }
    return this.string;
  }
}
