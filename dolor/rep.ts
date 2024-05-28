// Assuming 'Hero' is an interface with 'age' and other properties
interface Hero {
  name: string;
  age: number;
  superpower: string;
}

// 'Serial' will be a type with all 'Hero' properties except 'age'
type Serial = Omit<Hero, 'age'>;

// Example usage of 'Serial'
const heroWithoutAge: Serial = {
  name: 'Superman',
  superpower: 'Flight'
};
