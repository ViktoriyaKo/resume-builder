import Builder from './Builder';

class DataBuilder extends Builder {
  private fields: { caption: string; name: string; type: string }[] = [];
  private defaultType: string = 'text';

  addField(caption: string, name: string, type?: string): this {
    this.fields.push({ name, caption, type: type ? type : this.defaultType });
    return this;
  }

  build(): { caption: string; name: string; type: string }[] {
    return this.fields;
  }
}

export default DataBuilder;
