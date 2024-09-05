abstract class Builder {
  abstract addField(
    caption: string,
    name: string,
    value: any,
    type: string
  ): this;
  abstract build(): {
    caption: string;
    name: string;
    value: any;
    type: string;
  }[];
}

export default Builder;
