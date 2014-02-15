var levelData = {
  data : [//three across is one unit,1 down is one unit
    [
      ,''
      ,''
      ,''
      ,''
      ,'[x]           *          [_]'//teleport through a gem and open the door just before you land on it
      ,''
      ,''
      ,''
      ,''
      ,''
    ],
    [
       '[x]       [o]    [o]     [o]'//travel through the first two fuels, so that when you land you have enough fuel to collect the gems 
      ,''
      ,''
      ,''
      ,''
      ,''
      ,'          [*]     o      [*]' 
      ,''
      ,''
      ,'                         [_]'
    ],
  ],
  symbols : {
    '[' : 'podium_start',
    ']' : 'podium_end',
    'x' : 'start',
    'o' : 'fuel',
    '*' : 'gem',
    '_' : 'exit'
  }//might have to move to a captial, lower case system, or have layers?
}