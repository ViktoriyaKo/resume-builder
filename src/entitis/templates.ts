import { paramsVariables } from "@/constants";
import simpleTemplateImage from '@images/simple-template.png';
import modernTemplateImage from '@images/modern-template.png';

const templates = [
  {
    link: `?${paramsVariables.DESIGN}=simple`,
    image: simpleTemplateImage,
    title: 'Simple template #1',
    description: 'A clean and simple resume template',
  },
  {
    link: `?${paramsVariables.DESIGN}=modern`,
    image: modernTemplateImage,
    title: 'Modern template #2',
    description: 'Modern resume template',
  },
  {
    link: `?${paramsVariables.DESIGN}=simple`,
    image: simpleTemplateImage,
    title: 'Simple template #3',
    description: 'A clean and simple resume template',
  },
];

export default templates;
