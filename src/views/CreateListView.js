import ListView from './ListView';

export default function createListView(name) {
  return {
    name: name,
    render(createElement) {
      return createElement();
    }
  };
}