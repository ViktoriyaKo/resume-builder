import Builder from './Builder';

class DataBuilder extends Builder {
  private fields: {
    caption: string;
    name: string;
    value: any;
    type: string;
  }[] = []; 
  private defaultType: string = 'text';

  addField(caption: string, name: string, value: any, type?: string): this {
    this.fields.push({
      name,
      caption,
      value,
      type: type ? type : this.defaultType,
    });
    return this;
  }

  build(): { caption: string; name: string; value: any; type: string }[] {
    return this.fields;
  }
}

export default DataBuilder;
