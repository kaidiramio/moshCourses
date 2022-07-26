// node is single threaded & asynchronous (i.e one waiter visiting multiple tables taking mulitple orders while the chef cooks)

console.log('Before');

// Callback-based approach - a function we are going to call when te result of an async operation is ready. 
//
// getUser(1, (user) => {
    // get REPOS
//   getRepositories(user.gitHubUsername, (repos) => {        
//     getCommits(repos[0], (commits) => {
        //GET COMMITS
//       console.log(commits);
//     })
//   })
// });

// Promise-based approach
// getUser(1)
//   .then(user => getRepositories(user.gitHubUsername))
//   .then(repos => getCommits(repos[0]))
//   .then(commits => console.log('Commits', commits))
//   .catch(err => console.log('Error', err.message));


// Async and Await approach
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } 
  catch (err) {
    console.log('Error', err.message);
  }
}
displayCommits();

console.log('After');

function getUser(id) {
  return new Promise((resolve, reject) => {
    // Kick off some async work 
    // schedules task to be performed in the future/ it doesn't block it doesn't wait it just schedules a task - 2 seconds
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id: id, gitHubUsername: 'mosh' });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      // resolve(['repo1', 'repo2', 'repo3']);
      reject(new Error('Could not get the repos.'));
    }, 2000);  
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit']);
    }, 2000);
  });
}