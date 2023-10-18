function hanoiTowerIterative(n, fromRod, toRod, auxRod) {
    let steps = Math.pow(2, n) - 1;
  
    // определение направления движения диска
    let direction = (n % 2 === 0) ? "clockwise" : "counterclockwise";
  
    for (let i = 1; i <= steps; i++) {
      let disk = i % 2 === 0 ? getMoveableDisk(fromRod) : getMoveableDisk(toRod);
      let source = i % 2 === 0 ? fromRod : toRod;
      let destination = i % 2 === 0 ? auxRod : toRod;
  
      if (direction === "clockwise") {
        moveClockwise(disk, source, destination);
      } else {
        moveCounterclockwise(disk, source, destination);
      }
    }
  }
  
  function getMoveableDisk(rod) {
    // возвращает верхний диск на стержне
  }
  
  function moveClockwise(disk, fromRod, toRod) {
    console.log(`Перемещение диска ${disk} с ${fromRod} на ${toRod} в по часовой стрелке.`);
  }
  
  function moveCounterclockwise(disk, fromRod, toRod) {
    console.log(`Перемещение диска ${disk} с ${fromRod} на ${toRod} против часовой стрелки.`);
  }



  // ----------------------------
  // ----------------------------

  function hanoiTowerRecursive(n, fromRod, toRod, auxRod) {
    if (n === 1) {
      console.log(`Перемещение диска 1 с ${fromRod} на ${toRod}.`);
      return;
    }
  
    hanoiTowerRecursive(n - 1, fromRod, auxRod, toRod);
    console.log(`Перемещение диска ${n} с ${fromRod} на ${toRod}.`);
    hanoiTowerRecursive(n - 1, auxRod, toRod, fromRod);
  }