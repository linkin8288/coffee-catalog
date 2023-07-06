export interface Coffee {
  value: any;
  name: string;
  formCode: string;
  displayOrder: number;
  availability: string;
  assets: {
    thumbnail: {
      large: {
        uri: string;
      };
    };
    fullSize: {
      uri: string;
    };
    masterImage: {
      uri: string;
    };
  };
  sizes: string[];
  id: number;
  category: string;
}