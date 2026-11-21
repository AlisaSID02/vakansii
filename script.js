const jobs = document.querySelectorAll(".job");

jobs.forEach(function(job) {
    const details = job.querySelector(".details");

    job.querySelector(".hide-details").addEventListener("click", function() {
        details.style.display = "none";
    });

    job.querySelector(".show-details").addEventListener("click", function() {
        details.style.display = "block";
    });

    job.querySelector(".hide-job").addEventListener("click", function() {
        job.style.display = "none";
    });
});

const showAll = document.getElementById("show-all");

showAll.addEventListener("click", function() {
    jobs.forEach(function(job) {
        job.style.display = "block";
    });
});
