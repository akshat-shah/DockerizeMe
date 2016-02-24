var GitUrlParse = require("git-url-parse"); //sudo npm i --save git-url-parse
var exec = require('child_process').exec;
var child;

/*var name_github_repo = GitUrlParse("git@github.com:mrajashree/linguist.git").name;
git@github.com:mrajashree/App.git
console.log("Name of github repo : ", name_github_repo);*/
var url_github_repo = process.argv[2];
var name_github_repo = GitUrlParse(url_github_repo).name;

var py =
{
  clone: function()
  {
    var clone_cmd = 'git clone '+url_github_repo+' '+name_github_repo;
    exec(clone_cmd, function(err,out,code) {
      py.detect();
    })
  },

  detect: function()
  {
    var command = 'pylinguist '+name_github_repo;
    exec(command, function(err,out,code)
    {
      console.log("Technology of the repo is: ",out.split('\n')[0].split(' ')[1]);
      //console.log("Technology of the repo is: ",out);
      process.exit();
    });
    
  }
}


/*Git.Clone(url_github_repo, name_github_repo)
  .then(function(repository) {console.log("Cloned and repo created");})
  .then(function() {py.detect();})
  .done(function () { console.log("Done!");  });*/
py.clone();
console.log("Name of github repo : ", name_github_repo);
