let turtleArray = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

    let newTurtleArray = turtleArray.filter((movement) => (movement[0] >= 0 && movement[1] >= 0));
    let totalSteps = turtleArray.map( (movement) => movement[0] + movement[1]);

    console.log(newTurtleArray);
    console.log(totalSteps);
    turtleArray.forEach((movement) => {
        console.log (movement[0] + movement[1])
        return "";
    });


