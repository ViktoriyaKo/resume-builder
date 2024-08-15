abstract class Builder {
  abstract addField(caption: string, name: string, type: string): this;
  abstract build(): { caption: string; name: string; type: string }[];
}

export default Builder