export type Game = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon:
    | "globe"
    | "grid"
    | "book"
    | "library"
    | "shuffle"
    | "layout-grid"
    | "shapes"
    | "puzzle"
    | "gauge"
    | "sigma"
    | "venus-mars"
    | "goal";
  gradient: string;
  tag: string;
};

export const games: Game[] = [
  {
    id: "country-selector",
    title: "Country Selector",
    description: "Test your geography instincts by narrowing down nations from clues around the world.",
    href: "https://www.logicology.in/country-selector",
    icon: "globe",
    gradient: "from-[#1eaeea] to-[#063797]",
    tag: "Geography",
  },
  {
    id: "hidato",
    title: "Hidato",
    description: "Fill the grid with a continuous path of numbers in this addictive number-chain puzzle.",
    href: "https://www.logicology.in/hidato",
    icon: "grid",
    gradient: "from-[#063797] to-[#0c2156]",
    tag: "Logic",
  },
  {
    id: "logicoland-v5",
    title: "Logicoland Volume 5",
    description: "A fresh set of brain-bending logic puzzles to sharpen your reasoning skills.",
    href: "https://www.logicology.in/logicoland/volume-5",
    icon: "book",
    gradient: "from-[#ff6600] to-[#ed904a]",
    tag: "Puzzle Pack",
  },
  {
    id: "logicoland-v4",
    title: "Logicoland Volume 4",
    description: "The classic volume of curated logic challenges for every skill level.",
    href: "https://www.logicology.in/logicoland4",
    icon: "library",
    gradient: "from-[#ed904a] to-[#ff6600]",
    tag: "Puzzle Pack",
  },
  {
    id: "anagram",
    title: "Anagram",
    description: "Rearrange scrambled letters at speed to uncover the hidden words.",
    href: "https://www.logicology.in/gamestobepublished",
    icon: "shuffle",
    gradient: "from-[#1eaeea] to-[#0c2156]",
    tag: "Word Game",
  },
  {
    id: "sudoku-solver",
    title: "Sudoku Solver",
    description: "Crack every row, column and box in this timeless numbers grid challenge.",
    href: "https://www.logicology.in/logicoland",
    icon: "layout-grid",
    gradient: "from-[#063797] to-[#1eaeea]",
    tag: "Numbers",
  },
  {
    id: "symmetric-pattern",
    title: "Symmetric Pattern",
    description: "Spot and complete mirrored patterns to train your visual reasoning.",
    href: "https://www.logicology.in/books/symmetrypattern",
    icon: "shapes",
    gradient: "from-[#0c2156] to-[#ff6600]",
    tag: "Visual",
  },
  {
    id: "jigsaw",
    title: "Jigsaw",
    description: "Piece together scattered letter tiles before the clock runs out.",
    href: "https://letterjigsaw.netlify.app/",
    icon: "puzzle",
    gradient: "from-[#ff6600] to-[#063797]",
    tag: "Puzzle",
  },
  {
    id: "grid-race",
    title: "Grid Race",
    description: "Race against time across a grid of challenges built for speed thinkers.",
    href: "https://gridracegame.netlify.app/",
    icon: "gauge",
    gradient: "from-[#1eaeea] to-[#ed904a]",
    tag: "Speed",
  },
  {
    id: "matching",
    title: "Matching",
    description: "Sort words into their matching pairs at speed in this quick-fire classification game.",
    href: "https://www.logicology.in/MasculineFeminineGame",
    icon: "venus-mars",
    gradient: "from-[#ed904a] to-[#1eaeea]",
    tag: "Word Game",
  },
  {
    id: "prime-time",
    title: "Prime Time",
    description: "Hunt down prime numbers and outscore the clock in this rapid-fire challenge.",
    href: "https://primetime-ruby.vercel.app/register",
    icon: "sigma",
    gradient: "from-[#063797] to-[#ed904a]",
    tag: "Numbers",
  },
  {
    id: "penalty-shootout",
    title: "Penalty Shootout",
    description: "Answer fast to line up your shot and slot it past the keeper for the win.",
    href: "https://www.logicology.in/footballgame",
    icon: "goal",
    gradient: "from-[#1eaeea] to-[#ff6600]",
    tag: "Speed",
  },
];
