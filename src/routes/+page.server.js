// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
export const ssr = false;
// export const csr = false;
export function load() {
  const githubs = ["Show me the repo!", "Github", "Source Code", "Github Repository", "Read more on Github"];

  // @ts-ignore
  function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {

      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  }
  shuffle(githubs);

  let counter = 0;
  const github = () => {
    if (counter >= githubs.length) {
      counter = 0;
      shuffle(githubs);
    }
    const github = githubs[counter];
    counter++;
    return github;
  };
  const projects = [
    {
      "title": "🐜 Ant Colony Optimization (ACO)",
      "keywords": ["Visualization", "Metaheuristic", "Optimization", "Search-Algorithms"],
      "body": [
        `Ant Colony Optimization is a metaheuristic approach that is well known as a solution approximator for the NP-Complete <a class="link" href="https://brilliant.org/wiki/traveling-salesperson-problem/" >Traveling Salesman Problem (TSP).</a >`,
        'I have implemented a visualization of the ACO algorithm to solve the TSP problem. The visualization is interactive and allows you to change the parameters of the ACO algorithm and see how it affects the search.',
        'Click <a href="/ant_colony_optimization/index.html" class="subtitle-link"> here</a> to go to the visualization.'
      ],
      "github": "https://github.com/kariyum/ant_colony_optimization.git",
      "start_date": "2021-06-01",
      "end_date": "2021-06-30",
      "techStack": ["Javascript"],
    },
    {
      "title": "Neural Drone",
      "keywords": ["Neural Networks", "Machine Learning", "Heuristics", "Genetic-Algorithm"],
      "github": "https://github.com/kariyum/neural_drone",
      "body": ['<p> A simple neural network learning to control a Drone and avoid crushing (keep the drone within the screen) for as long as possible using genetic algorithm as the neural network optimizer. </p>'],
      "start_date": "2022-12-01",
      "end_date": "2023-01-01",
      "techStack": ["Python","Pygame"],
    },
    {
      "title": "Single Machine Scheduling Problem",
      "keywords": ["NP-Hard", "Optimization", "Genetic-Algorithm", "Metaheuristic", "Branch&Bound", "ACO"],
      "body": ['Leveraging different heuristics and meta-heuristics approaches to explore the solution search space. Comparing their speed and best found solution.'],
      "github": "https://github.com/kariyum/single_machine_scheduling_problem",
      "start_date": "2022-01-01",
      "end_date": "2022-01-01",
      "techStack": ["Python"],
    },
    {
      "title": "Program Insights",
      "keywords": ["Web-App", "Benchmarking", "Performance", "Analysis"],
      "body": [
        "A web app that accepts metrics streaming and neatly displays them in a sorted table adding in some valuable information such as the min, max, average of the function's running time and and it's cpu occupation in milliseconds.",
        "I felt the need of such an app to effectively find bottlenecks in a webservice."],
      "github": "https://github.com/kariyum/program-insights",
      "start_date": "2024-04-01",
      "end_date": "2024-04-01",
      "techStack": ["Svelte", "Javascript", "Scala"],
    },
    {
      "title": "Expense Tracker",
      "keywords": ["Mobile-App", "Expenses"],
      "body": [
        `Mobile app useful to track one's day to day expenses, extract some valuable information with some aggregations and graphs.`
      ],
      "start_date": "2023-06-01",
      "github": "https://github.com/kariyum/wallet",
      "end_date": "2023-06-01",
      "techStack": ["Flutter"],
    }
  ];
  return {
    projects_curiosity: projects.map((project) => {
      return {
        ...project,
        "start_date": new Date(project.start_date),
        "end_date": new Date(project.end_date),
        "to_repo": github()
      }
    })
  };
}