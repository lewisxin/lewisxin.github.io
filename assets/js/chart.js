$(document).ready(function () {
    createChart();
})

var createChart = function () {
    var languages = $('#languages');
    var frameworks = $('#frameworks');
    var interests = $('#interests');

    var options = {
        scale: {
            ticks: {
                beginAtZero: true
            }
        }
    }

    var languagesChart = new Chart(languages, {
        type: 'radar',
        data: {
            labels: ["HTML5", "CSS", "JavaScript", "Python", "Java", "C", "SQL", "NoSQL"],
            datasets: [{
                label: "Programing Languages",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255, 99, 132, 0.2)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255, 99, 132, 0.2)",
                data: [8, 8, 9, 5, 9, 8, 7, 7]
            }]
        },
        options: options
    });

    var frameworksChart = new Chart(frameworks, {
        type: 'radar',
        data: {
            labels: ["Angular2", "React", "OpenUI5", "jQuery", "JSF", "PrimeFaces"],
            datasets: [{
                label: "Frameworks & Libraries",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                pointBackgroundColor: "rgba(54, 162, 235, 0.2)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(54, 162, 235, 0.2)",
                data: [8, 6, 8, 9, 8, 9]
            }]
        },
        options: options
    });

    var interestsChart = new Chart(interests, {
        type: 'radar',
        data: {
            labels: ["Web Dev", "UI/UX", "IoT", "iOS Dev", "VR/AR"],
            datasets: [{
                label: "My Interests",
                backgroundColor: "rgba(255, 206, 86, 0.2)",
                borderColor: "rgba(255, 206, 86, 1)",
                pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255, 206, 86, 0.2)",
                data: [8, 7, 5, 6, 6]
            }]
        },
        options: options
    });
}
