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
      "title": "Distributed Metaheuristic Optimization Visualizer",
      "keywords": ["Visualization", "Metaheuristic", "Optimization", "Search-Algorithms", "TSP"],
      "body": [
        "Engineered an interactive visualization for Ant Colony Optimization to solve the NP-Complete TSP, featuring real-time parameter tuning and convergence analysis.",
        'Experience the live simulation <a href="/ant_colony_optimization/index.html" class="subtitle-link">here</a>.'
      ],
      "github": "https://github.com/kariyum/ant_colony_optimization.git",
      "start_date": "2021-06-01",
      "end_date": "2021-06-30",
      "techStack": ["JavaScript", "HTML5 Canvas"],
    },
    {
      "title": "Autonomous Agent Evolution Framework",
      "keywords": ["Neural Networks", "Evolutionary-AI", "Genetic-Algorithms", "Simulation"],
      "github": "https://github.com/kariyum/neural_drone",
      "body": [
        "Developed an evolutionary simulation environment where agents utilize feed-forward neural networks and genetic algorithms to optimize survival behaviors in dynamic spaces."
      ],
      "start_date": "2022-12-01",
      "end_date": "2023-01-01",
      "techStack": ["Python", "Pygame", "NumPy"],
    },
    {
      "title": "Heuristic Search Space Explorer",
      "keywords": ["Combinatorial-Optimization", "NP-Hard", "Benchmarking", "Algorithm-Analysis"],
      "body": [
        "Architected a benchmarking suite comparing Branch & Bound, Genetic Algorithms, and ACO to analyze search-space exploration strategies for NP-Hard scheduling."
      ],
      "github": "https://github.com/kariyum/single_machine_scheduling_problem",
      "start_date": "2022-01-01",
      "end_date": "2022-01-01",
      "techStack": ["Python", "Matplotlib"],
    },
    {
      "title": "High-Throughput Performance Profiling Suite",
      "keywords": ["Distributed-Systems", "Observability", "Benchmarking", "Real-time-Analytics"],
      "body": [
        "Designed a real-time observability platform for ingesting and visualizing high-frequency metric streams to identify and resolve performance bottlenecks in distributed architectures."
      ],
      "github": "https://github.com/kariyum/program-insights",
      "start_date": "2024-04-01",
      "end_date": "2024-04-01",
      "techStack": ["SvelteKit", "Scala", "ZIO", "Postgres"],
    },
    {
      "title": "Personal Finance Analytics Engine",
      "keywords": ["Mobile-Development", "Data-Aggregation", "Analytics", "UX-Design"],
      "body": [
        "Architected a cross-platform mobile engine for granular financial tracking, featuring high-performance data aggregation and interactive analytics layers."
      ],
      "start_date": "2023-06-01",
      "github": "https://github.com/kariyum/wallet",
      "end_date": "2023-06-01",
      "techStack": ["Flutter", "Dart", "SQLite"],
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