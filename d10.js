const input = `.L7F--|-77FLF7-F-FLL.FL7|7FL7-7.7-FJ7FJ-F.|7-.F|-|F-JFJFL-J-.F|.7F--77|77F7F|J77|-|7|-F-7.|JFL7-7.J---J.F7--.7F|--LJFL-J.FFFF.-L|---7777F7-|\nJF-|.|.|-7J.7-F|-JJ7F.J7L-|JLL-7J.JF-7.7|-F7.FFJ--J.L77FJ7J.F--L.LJJFFJLJF-J||JL||.FJ7L-.F7||JL-FFJL.F|FLJLLFL|||J|L|77LF7.|--|||.|LLJLJJ.F7\nLLJF7F-L.7F-J-LJ|.FF77LLF7||FF--7L-77.J-J7JJ.|.L7FL|.F7JF77F-7.L-7L7JLF7.L7LL7.L|7FFL--J.L7-F-L-FJ7|7FFJJ-FJ|.J77.JF7FL.-JLFJ-L|7FJFJ7FF-7JJ\nL|-|J|F-7.7|.7-L-7LFJ|7L||JFF|JF7J|L-7J7|||..|7|L|J..||J..F7.|F|.--J7-LL7-JFL|F7.LJ7JJL---J||J|.L7F7--|JLFJ7J7|J|7.7J-|--J..L7F-|LF|JJ||7L-7\n7.LJ.LJLJ-7JJ-J|-J7||LJF||FJ-L-FL-7LJ77F|.LJ.|-||J.FF.L7L-|.7-|77.|..7JL--JL-|-J.JF--7JFJ|L7JFF-|-||77FF---7F|7--L-L|.|7-F-7FFJLL-J|J.FJ7|FL\nL7.|-JJ||J|LL|-|7.7J7-FF7L|||--|F|-7JLF-J7..F|.L77F-F7L7L---J-7J|-F7FL||LLF..|F|-JF|FF--7-7J7FJL|F||F7JL7F-J-J.L|J.J.LL--J.L-JJ.|.L-.F|---FJ\nLL-77..FF-|7|F-F-||F777J|LLFJ|FLJFJ.-7JJLL777|-FLJ.L||-JF|-|77|.F7|L7-77.|F-F77JJ.|F7L7FJ...-F-7JF|LJ|F-JL-7.|F-7.|JF..LF7|-7J.F|.LJF|JJJLF7\nLL-7-L7LJJJ-F7.JFL|-|L7F|-7L7-F77|LLJ|F||FL77L.L7J7F||L|F--|-LJ-|LJFJL-7L|J-||-J.-FJL7|L-7-F||FJF7L7FJL-7F-J77L7J||F|-7.LJJ.JLF-L7J-F|J..7||\n..LL.|LF|L|.-J7LL7|||FFJ--|.FF7JL|.F7-JJF|LL|F-.F7-FJ|7LF..LFJFLL7FJJLF-J|F-||J-J7L-7||F-JJ|L|L7||-||F7||L7|L7|F7-FFJ|F-|7J.J7LJL|J.LL-F|FF.\nF|.|F|7.|.7-|||-.FLJ7L7-|FJ7FLJ|7LJ-L-|F7J7-L|.FFJLL7|-F-77F--||-||77FLJLL|.||..LF--JLJL-7.J|L7|||FJLJL-JFJ7-F7-L77JF|77LFF7LL77.L-F||.FL-JF\n-FJ77LJ-F.-.7F|LJ7-F|F.FF7JFJF|F|7JF||F||.F.F|-F-7F7||F|FJFJ..F7FJL--7JF7-|F|L7JLL7F7F7F-J.LFFJ|||L--7F--JF7L||J.L7-L.||F-L|.LF-JJ.LL-F|JL7L\nL|JL|J|FJ7.F.FJFL.FLLJFFJ|7|JFF7F7F-7-FJ|F7F7LLL7|||||FJ|LF.FFJLJF---J.||-LFJFJLF7||LJ|L--77LL7LJL7F7|L-7FJ|FJL-7.||7F|J-|L-7FFJ|L7-FJ|J7.|.\n7-7-7F-7FJ--7||F|LJLL|JL7L77F7|LJ|L7|LL7|||F7-F7|||||LJFJF--7L--7|F--7F7F-7L7|F7||LJF-JF--JF-7L7F-J|||F-J|FJ|F--J77J7||-L77LFLJF--FFJ.-.FF.-\n|L7-L7L-JJ7.|-F-777..L7FL7L-JLJF-JFJL7FJ|||||||||LJLJF-JL|F-JF--JLJF-J||L7|7||||||F7L-7L-7.L7|FJL7FJ|||F-J|FJL----7-7777F-7-LJFLJ-|JJ-LJ7|..\nFL..|JFJJ.J7L7LJ-7J7F7J-.L----7L-7|F-JL7LJ||L-J|L--7FJF-7|L-7L-7F7FJF7||||L7|||LJ||L-7L7FJF7||L-7|L7LJ|L7FJ|F-----JLFJ|-7LJ||-L7..|L7F-L7-.F\n7.FJ|L7L-LJLFFJJJ.F|.LJLFF----JF-J||F77L-7|L-7FJF7-||.L7||F7L-7||||J|||L7L7|||L-7||F7L-JL-J||L7FJL7|F7|FJL-JL------7JFJ7J|.FJ.LF.F||LJ|LL77|\n-|--FJFL-JJFLJL-F77|7|L--L----7L-7|LJ|F-7|L-7||FJL7|L7FJ|LJ|F-JLJ|L7||L7|FJLJ|F-J|LJ|F---7FJ|FJL-7LJ||||F----7F----J7-JFF7FJFL--77.F7FFLL-JJ\nL7|FJJFFL7|.|-7-J|F|7.||.F7F7LL-7||F-J|FJ|F7LJ|L7FJ|FJ|FJF-JL7J-FJFJ|L7||L7F7LJF7|F-JL--7LJFJL7F7L7FJLJ|L-7F7LJF--7-|-FJF-7JJ-FL-|7F|77-|J.F\n..|L|--LL--7|.L-JF|JLFF7-||||F7L|||L7FJL7LJL-7|FJ|FJ|.|L7L--7|F-JFJ.L7|||FJ|L7FJLJL--7F7L7.L7FJ|L-J|F7-|F-J||F7L7FJF7F-7|FJJ.LFJ.|F-JFJ.|F-7\nFF7-7J|L|LF-J.F|-7J.F-JL-JLJLJ|FJ|L7||F-J|F7FJ||FJL7L7L7L7F7|LJF-JF7FJLJ|L-J.|L7F7F7FJ|L-JF-JL7L--7LJL-JL7.|||L-J|.||L7||||F-F7FJLJJ7J7FLJ|J\nJ.|.|LJ.-.-7L7FF7.FLL7F------7|L7|FJLJ|F7FJ|L7|||F7|FJ-|FJ||L-7|F-J|L--7L7FF7L7|||||L7|F77L--7|F7FJF-----JFJ||F--JFJL-JLJL-7.||-7FJ...|.JL77\n.FF7L-|7L|7|JF-|LF7.F||F-----JL7|||F--J|||FJFJLJ||||L-7||J||F7|||F-JF-7L7|FJL-JLJ|||FJ||L7F7FJLJ||FJFF7JF7L7||L7F7L-7F-----JFJ|LJ||.L7LJ-F|7\n.|L7FF7-F|7|F7-L77L-FLJL----7F7LJ|||F7FJ||L7L7F-J|||F-J||FJ||LJ|||F-JFJL||L--7F--J||L7||FJ||L--7|||-FJL7|L7|||FJ||F7|L-7LF7L|FJ7FFJ.|JF-FJ.|\n|JF7J|..-FJF7-77|7FLLLFF7F-7||L-7LJ||||FJ|FJFJ|F7|||L7F|||FJL7FJ|LJF-JF7||F--JL-7FJ|FJ||L7|L7F-J||L7|F7LJFJ|||L7|||LJF7L-JL-JL--777-7.F7L.L|\nL.|||F.7LFJ|LL|FLJJFF7FJ|L7|LJF-JF7LJLJ|.|L7L7||LJ||FJFJ|||F7||FJF7|F-JLJ|L--7F-JL7||FJ|FJ|FJL7FJ|FJLJ|F-JFJ||FJ||L7FJL---------JL-7|7|7L|J.\nLFL|-77LFF7|.|.||F|F||L7|FJ|F7L--JL--7FJFJFJFJ|L7FJ||FJFJ|||LJLJFJLJL-7F-JF--J|F7FJ|||FJL7||F-JL7|L-7FJ|F7L7||L7||.|L---7F-7FF-7JJ|.-LJ|FLF-\n.F.LFL--|L7--L---F--J|FJ|L7LJ|F-7F---J|JL7|FL7|FJ|FJ|L7L7||L---7|F7JF7|L-7L--7LJ|L7||||F-J||L-7FJ|F-JL7LJL7||L7LJL-JF---J|FJFJFJF-7-.LFLLJLJ\nJJ7LL7JFL-7-L|||LL--7LJFJFL-7|L7|L---7L-7|L7|||L7|L7L7L7||L7F7FJLJL7||L-7|-F7L-7L7|LJ||||FJL7|||J|L-7-L7F-J||-|F--7FJ.F--J|J|FJF7--J7FJLL--J\nFLL.LJ.L7.L|LLJL-|7LL-7|F7F-J|FJ|F7F7|F-J|FJFJ|FJ|FJFJFJLJFJ||L--7FJ|L-7|L7|L-7L7||F-J|L-JF-JFJL7L7FJF7||F7|L7|L-7||F-JF-7L-JL-JL7.7F|--J7||\nJJL-|-7.J7--7FL-L|-F--J|||L-7|L7|||||||F7||7L7LJFJL7L7L7F-JFJ|F-7||FJF-JL7|L-7|FJ|||F7L--7L7FL7FJFJ|FJ|||||L7||F-JLJ|F-J.L7F7F-7FJ-LJ7JL--7-\n|.-.FFJ-L77J|-L7F7LL--7|||F-J|FJLJ||LJ|||||F7L-7|F7|FJFJL-7L7||FJ|||FJF7FJL7FJ|L7||LJL--7L7|F7||-L7||FJ|LJL7|||L--7FJL-S7JLJLJF|L-77.--L-J|L\nF7.7.777FL7FL.FFJL----JLJ||F7|L--7|L-7LJ||||L-7|LJ|||FL7F-JFJLJL-JLJ|FJ||F-JL7|||||F----JFJ||LJL7.||||FJF7FJ|||F--J|F--7L----7FJF-J--|7.F-F7\nLF-L--FJ7-J777FL7F-7F---7|LJ|||F7||7FJF-J|||F-J|F-J|L7FJ|F7L-7F--7F7LJFJ|L7F7||FJLJ|F7JF7L7||F--JFJ|||L7|LJ||||L-7.|L-7L---7FJ|FJJ7||LJJ.|JL\nL|7.FLLJLL--7J.LLJ7LJF--JL7FJL-JLJ|FJFJ-FJ||L7FJL7|L7LJFJ||F7LJF7LJL-7L7L7||LJ|L-7FJ|L7||FJ||L7F7L7|||FJL7JFJLJF7L-JF7L---7LJL||J.77.J|L|J.|\nFFJ7|77L-|..-.|-F7F-7L---7|L-----7|L7|F7L7|L7||F-JF7L-7|-||||F7||7F7F|FJL||L7FJF7||L|FJ||L7||FJ||F||||L-7L-JF7FJL7F-JL--7FJ||L|L7.-77FL7..F|\nLLFJJL|.|F-F|FF.||L7|LF7.||F7LF7FJL-J||L7||FJ|||F7||F-JL7|||||||L7|L7|L7FJL7|L7|||L7||FJL7||||FJ|FJ|||F7|F--JLJF7LJF---7||F--7|FJFLF-F-77F-7\n.LJJFF|7F-7|FF--JL7||FJL-JLJL-J|L---7|L7|||L7LJ|||||L-7FJ||||||L7|L7||FJ|JF||FJ|||FJ||L7FJ|||||FJ|.||||LJL-77F7|L--JF7FJLJ|F-JLJ|J.JJLFFFJ||\nFF.J-L77||7-FL-7F7||LJF-------7|7F7FJL7|LJL7||FJ|LJ|F7|L-J||LJL-JL7|||L7L7FJ|L7||||FJ|FJL7|LJLJL7L7||||F---JFJLJF7F7|||F7FJ|-F7FF.FL---JJ-F7\nFF7J.FJL---7LJ-LJ||L--JF------JL-JLJLFLJF--JL7L7L-7||LJ|F-JL--7F7FJ||L7L7|L7|FJ||||L7|L7FJL--7F-JFJLJ|||F7F7|F--J|||||LJ||FJFJL-7777|F7J.FFJ\nLLF--L7FL|..7|F7FJL7F-7L---7F7F7F7F7FF-7|F7F7L7|F-J||F-7L7F7F7|||L7|L7|FJL7||L7|||L7||FJL7F7FJ|F7L-7FJ|LJLJLJL--7LJLJ|F-J|L-JF--JL7--LLJFL|J\nFF|||LF7-LFFF7||L-7|L7|LF--J|LJLJLJL-JFJLJ||L7||L7FJ|L7L-J|LJ|LJL7|L7||L7FJ||FJ|||||||L7FJ||L7LJL7FJL-JF7F--7F7FJ-F7|LJF-JF-7|7.|F|J|L7F|-|.\nL|7LJ-7LF7FFJLJ|F-JL7|L-JF7FJF-------7L-7FJL7LJ|FJL7||L7F7L-7L7F-JL-JLJF||FJ|L7|||FJ||FJ|FJ|FJF--J|F--7||L-7LJ|L-7||F7FJF7L7LJ-F7-7FJLL-|JF7\n|.LJ..7F-FJL--7|L--7LJF--JLJLL---7F7FL7FJL7FJJFJ|F-J|F-J||F-JFJL------7FJ||FJFJ|||L7||L7LJFJL7L7F7|L-7LJL--JF7|F-J|LJLJFJ|FJF7F|J-LFJ|F-J-L7\n|.|F--J|FF----JL--7L--J.F7F7F--7FLJL-7|L-7|L-7|FJ|F-JL-7||L7FJF--7F7F7|L7||L7L7|||-|||FJF-JF-JFJ|LJF-JF-----J|||F7|F--7L7|L-J|-J|.|.F7FL77|J\nLF.L|J7|-L-------7|.F7F7||||L-7L--7F-JL--JL7FJ||FJ|FF--J||FJL7L-7||LJ||.|||FJFJ|||FJ|LJFJF7|F7L-JF-JF-JF-----JLJ|LJL-7L-JL---J|--FL|7L7.LLJ7\n.|L--7F|JL|F7F7F-JL-JLJLJLJ|F7L--7|L7FF7F7.|L7||L7L7L--7||L-7L7FJ|L-7|L7||||FJFJ||L7L-7L-JLJ||F7.L--JF7L------7F|F---JF7F---7LL-7|J.F.-7F|LJ\nFF7F7FJLF--JLJLJF-7F7F-7F-7||L---JL-JFJLJL7L-JLJFJFJF--J||F7L7||FJF-JL-JLJ||L7|FJL7L7FJF7F--JLJL7.F--JL------7L-JL-7F7|LJF--JJ7JF7.-JF-JF7J|\n7.LJFJJ.|F7F7F-7|FJ|LJFJ|FJLJF------7L7F--JF--7FJFJ7|F7FJ|||FJ||L7L---7F-7|L7LJ|F7L7||-||L7F7F-7L7L7F-7F----7L-----J|LJF-JFF77J7J|.|JL7LJJL|\n|7-FFJLF||||LJ|LJL7L7FJFJ|F-7|FF----JFJL--7L7FJ|FJF7|||L7|||L7LJ.|F7F7||FJ|FJF-J|L7|||FJL-J||L7L7L-J|-LJF--7L-------JF7|JF-JL7.L-J7|F-|-L-F-\n----JLF-LJ||F--7F7L-JL7L7LJFJ|FJF7F--JF7F7L-JL7LJFJLJ|L7|LJL7|F--J||||LJL7|L7|F7|7LJLJ|F-7FJ|FJ7|F7FJF-7L-7|F-----7F7||L7|F--J7.|-|F-7|-F7JL\n||-|7F7JJLLJL-7|||F7F7L-JF7L-JL-JLJF7FJLJL-7F-JF7L---JFJL--7LJL--7|LJL-7FJL7|||LJF----J|-||-LJF7LJLJ-L7L--J|L-7F-7LJLJL7LJL-----77|F-L-77J.|\n|7.F7|.|||F7F7|||LJ||L-7FJL--7LF7JFJ|L--7F7LJF-JL----7|F7F-JF----JL-7F-JL-7|||L7FJF-7F7|FJL-7FJL-7F7F7L--7FJF-J|FJ|F777L----7F--J7F-J.|LF777\n||-J7J.LF-JLJLJ|L-7|L-7|L-7F7L-JL7L7|F--J|L7.|F--7F--JLJ|L7FJF-7F7F-JL7F7FJ|||FJL-J|LJ||L7F-JL7F7LJLJL---JL7L-7|L--JL7F7F7F7LJJJLJJ.FFL-J.|F\n|F7-J-7||F7F--7L--JL--JL-7LJL---7L-JLJ.F7L7L7|L-7LJ-F7LFJFJ|FJFLJ|L--7|||L7|||L7-F---7||.LJLF7LJL---7F---7JL--J|F---7LJLJLJL7J..777.7JJ.FFLJ\nF-J7|.LFLJLJF-JF7F----7F-JF----7L7F7F-7||LL7LJF-JJF-JL7L-J|LJF---JF--J|||FJ||L-J.L-7FJLJF-7FJL7|F7F-J|F-7L7F--7|L--7|F-7F7F-JF7FFF7F7-77LJ.F\n|J--FFJ||J-LL--J||F-7FJL77L--7FJFLJ||FJ||F-JF7L--7|F--J7F--7JL7F-7L7F7||LJ-LJ|F7.F7||F7LL7|L-7L7||L--JL7|FJ|F-J|F--J||7LJLJFFJL--JLJL7J||FJJ\n|F7JL|.F-7.FF7F7LJL7|L-7|F7LFJL7F-7LJL-JLJF-JL7F7||L----JF7L7FJ|7L7LJ||L--7J-FJL-JLJ||L7J||F7L7|||F7F--JLJFJL7FJL-7.LJF7F7F7|F7F-----J-7F--F\n.LF7L|7|FJ-FJLJL-7FJL--JLJL7L7FJL7|F--7F--JF-7LJLJ|F-----JL-JL7|F7L7FJ|F--J|.L-7F7F7|L7|FJLJL7||||||L--7F7L-7||F-7L7F7||||||||LJFF77-|.|7FFJ\n.L|L.|L||F7L-7F-7|L---7F7F7L-J|7FJLJF7LJJF7L7L----JL7F------7-LJ||FJL7|L7J-F77-LJLJ|L-JLJF7F7LJLJ|||F--J|L--JLJL7L7LJ||LJ|||||F7-|L7F77LF--.\nFF-JF--||||F7LJFJL7F--J|LJL--7L7L---JL7FFJL-JF---7F7LJF7F7F7L7.||||F-J|FJJ7|L7F7F7FJF-7F-JLJL-7F7LJ|L7F7|F--7F7FJJ|F-J|F7LJLJLJL7|FJ||.F|FJ7\nL-7L7LFJLJLJ|F7L-7|L---JF----JFJF----7L-JF7F-JF7FLJL--JLJLJL7L7FJLJ|F-J|FF-L7LJLJLJFJFJL7F----J||F7L-J|LJL-7|||L-7LJF7||L---7F-7LJL-JL-7JJJL\n77FF--L7F7F7LJL-7||F-7F7L----7L-JF--7|F7FJ|L--JL-----7F7F7F7L-J|F7FJ|F7L-7FLL----7FJLL7FJL--7F7|||L7F7|F---J|||F-JF7||||F7F7LJ||F7F7F--J-JJL\n|L--.FFJ|LJL7F-7LJ|L7LJL7F---JF7FJF-JLJ|L7L7F-7F-7F-7LJLJLJL--7LJLJLLJ|F-J-.LLF-7LJLFJLJF---J|LJLJFJ|||L---7||||LFJLJLJLJLJL-7FJ|||LJJFJ7J7J\n7F|J.FL-JLF7LJFL-7L7|F7FJL---7|LJFL---7L-JFJL7|L7LJFJF7F7F7F7FJJJF|-|.LJJJ-||LL7L7F-7F-7|F--7|F--7L-JLJF---J|||L-JF7F-7F-----JL-JLJJ|.|JJF-7\nF-.|F7-FFF|L---7JL7LJ||L----7LJFF-----JF7-L--J|FJF7L-JLJLJLJLJ|F--F-F7.|J|-FL7-L7|L7||FJLJF-J|L-7|F7F77L---7||L7F7||L7|L---------------7-|L|\n|.FF----LFJF--7|F7L--JL7F--7L--7L--7F--JL----7|L-JL-----7F--7F7J|FJJ|-||LJLJLF--JL-J|||F-7L--JF7|||||L7F7F-JLJ-LJ||L7||F7F7F----7F--7F-JJL-L\nLFL.|F7JLL-JF7|LJL----7LJF-JF-7L---J|F-----7FJL-7F7F7F--JL7FJ||.L7LF7F|FF|F|FL-7F7F7LJ||FJF-7FJLJLJ|L7LJLJLF---7|LJFJ|LJLJ|L---7|L-7|||.F.||\n||L.-7L7|FF7||L------7L-7L--J-L7F--7|L---7-LJFF7LJLJ|L--7FJL-J|-||.LJ-77||F-FF7LJLJ|F7LJL7|FJL--7F7L7L7F-7FJF-7L7F7L-JF--7L---7||F7|LJ-LJ.--\n.|7LJJ|L-FJLJL-----7-L-7|7F----JL7LLJF7F-JF---JL7JF7L---J|F--7L-7J-F|J.|||..FJL7F7FJ|L7F7||L7F-7LJL7|F||FJ|FJ.L7LJL---JF7L---7LJLJLJJ.L|LFLJ\nL-||.--7LL--7F7F--7|F7FJL7L--7F7FJF--JLJF7L-7F-7L7||F7.F-JL7.L--J|F||JFL-F-LL-7LJ|L7||LJ|||FJL7|F--JL7LJL-JL--7L---7F--JL----JL|J7|JFFFL.|.|\n|7L-77LL7.F-J|LJF-JLJ|L7FJF7JLJLJ|L---7FJL7FJL7L-J|||L7|F-7L---7JLJ|F.|..LFJ|J|F7L-J|F--JLJL--JLJF--7||F7F----JF--7|L7F---------7-7L7-F7FJLL\nLJJ--7-||F|F7|F-JF--7L-JL7||F7F7F7JF7FJ|F-JL-7L7F7|||FJ||7L7F--J.LLLJ-LF--F.LFJ|L7F7|L-7F---7F---JF-JL-JLJF7F7FJF-JL-J|F7F------J77FL.|F7JL|\n|7-F.|-|-FLJLJL-7|JFJF7F7LJLJLJ||L-JLJFJ|F-7.L7LJ||LJL-JL-7|L-7.F.|LLFJJ|7|7|L-JFJ|LJF7LJF--J|F---JF7F7F--JLJLJFJF-7|FJ|||F7F7F7F777-JJFJF-7\n|7-J-7LLLF--7.F7LJFJFJLJL--7F-7LJF-7F7|FJ|FJF7|F-J|F------JL--JF7-|FFF7F7-JF-F7JL-JJFJL--JF7FJ|F7F7|LJLJF------JFJFJFJFJLJ|||LJLJL77L||.|--J\nFJLJ.L7.|L-7|FJL--JFJF-----J|FJF7L7LJ||L7|L7|||L--J|F7F--------J|7LF|LLFJLFJJ||F7F-7L----7|LJLLJLJLJF7F7L7F7|F77L7|-|FJF7FJLJF7F--J-J.|-F.FJ\nL7LF7.LF---JLJF7F7FJFL7F7F7FJL-JL-JF7LJFJ|FJ|LJF---J|||F7F----7FJ7-F7L||.||FF||||L7L-7F7FJL7F7F7F---JLJL-J||FJL7L|L-JL7||L7F-J|L--77||JL|7FJ\nLLJ.L7-L--7F7FJLJ|L7F7LJLJ||F------JL-7L-JL-JF7L--7FJLJ||L---7LJJ-FJ|-F7F7J-FJLJL7L7FJ||L-7||LJLJF7F------JLJF7L7|F---J|L-J|F7|F--J77L7.LJ|7\n77FJ.|.J.FJ|LJF7JL-J||F--7LJL--------7|F-7F7FJL7F7LJF--JL7F7FJJJ|JL7|-|LJ|LFL---7L-JL-JL--J||F7F7|LJF-------7|L7LJL----JF-7LJ|LJJJJ|7FF||LF7\nL|JJFFJJFL7|F-JL----J||F-JF7F--------J|L7LJ|L-7||L--JF--7LJLJFLF--7||FJF7|7JF7JFJF--7F7F-7FJLJLJLJF7L------7||||F---7F--JF|F-JF77|J|F-LL7|||\n.||.7J7.LFLJL-------7|||F7|LJF-7F----7L7L-7L-7||L----JF7L77F-77L-7LJLJFJLJJFJL-JFJF-J||L7LJF7F7F--JL-------JLJFJL--7|L---7|L--JL77F7J.|LFL-J\n-|7-F.FJ|F----------JLJLJ|L7FJFJ|F7F7|FJF7L7FJ|L7F7F--JL7L7|FJF7|L--7FJF7F7L-7F7|FL-7|L7|F-JLJ|L--7F7F7F-----7|F7F-J|F7F-JL---7FJLF7.F7--JJJ\n..|LLJ77FL7F--------7F--7L-J|FL7||LJLJ|FJL-JL7L7|||L7|F7L7LJL7|L7F-7|L-JLJL7-LJ||F--J|L|||F7F7L--7LJLJLJ|F---JLJ|L7LLJ|L-----7LJF7||F-7|JF--\n|FL-J||FJ-LJF-------J|F-JF--JF7LJL---7|L---77L-J||L7L-JL7|F7FJ|FJL7||F----7|F--J|L7F7L7LJLJLJL7F7L-------JF7F--7L7|F7FL-7F7F-JF-JLJ||FJ7-LJ7\n-L-7F7.L7..|L-7F7F7F7||F-JF--JL7LF7F7||F7F7L---7||7|F-7FJLJLJ7||F7|LJL7|F7LJL--7|LLJL7|F---7F7LJL---------JLJF-JFJ||L--7LJLJF7|F---J||F7.FFJ\nLLL-7||7LLFFF7LJLJ||||LJF7L--7FJFJLJLJLJLJL7F--J|L7||FJL-7F7F-J|||L-7FJFJL7F7.||L-7F7||L--7LJL----7F77F---7F7|F7L-J|F--JF---JLJL7F7FJLJL77||\n||JL7-FLJLF7|L---7LJLJ-FJ|F7FJL-JF-7|F7F-7FJL--7L-J||L--7|||L-7||L7||L7L7FJ||F7L-7|||LJF-7L-7F7F-7LJ|FJF-7|||LJL7F-JL---JF7F7F-7LJLJF-7FJ|L7\nF7---F-.LL||L---7|LF--7L7||LJF---J7L-JLJFJ|F---JF-7|L--7LJ||LFJ||FJFJFJFJ|7|LJL7|LJ||F-JFJF-J|LJJL-7|L-JFJLJL--7LJF7F7F-7|LJ|L7L-7F7L7|L-777\n||F-|LFJJ-||F7F-J|FJF7L-JLJF7|F--------7L7LJF77FJFJL---JLFJL7L7||L7L7L7L7|FJF--JF7FJ|L7FJ|L--JF----JL--7L-----7L--JLJLJ.|L-7|FJF-J||FJ|F-J-F\nLLJL|-JJ.FJ|||L-7||FJL7F---JLJL----7FF7L-JF7|L7|FJFF----7L-7L7|||FJ-L7L7||L7L7F7||L7|FJL7F-7F7|F--7F--7L--7F-7L---7FF7FFJF7|LJ|L7FJ||FJL7J-7\nL|-.F7.|FL7LJ|F7||LJF7LJF--7|F-7F7FL-JL7JFJ||FJ||F7|F---JF7L7||||||F7L7LJL7L7LJ|||FJLJF-J|FJ||LJF-J|F-JF-7LJ-|F7F7L-JL7L-J||J.F-JL7||L--J|F|\nF||.LLF--7L-7LJLJ|F7||F-JF7L7L7LJL----7L7|FJ|L-JLJ|||F-7|||FJ||LJ|FJ|-|F-7L7|F-J||L--7|F7||FJ|F-JF-J|F7L7L7F7LJ|||F7F7L--7||JFJF7FJ||JJ|.F-7\nFJFF7.L-7|F7L7F-7LJ|||L7FJL7L-JF7F---7L7LJL-JF-7F7||LJFJFJ|L7||F-J|FJFJL7L-J|L-7|L---JLJLJLJFJL--JF-J|L-JFJ||F7LJLJLJ|F7FJLJLL7|LJ7LJ7JL---L\n|.||7F|F|LJL-J|FJF7LJL-JL-7L--7|LJ|F-J-L-7F7FJ|LJLJ|F7L7L7|FJLJL-7|L7L7FJF-7|F-JL------7F---JJF--7L--JLF-JL|LJL-7|F7.LJLJF7||-LJJ-L7-L-|F|L|\nFLLLF-7FJF--7FJL-JL-7F----JF--J|F7FJF--7JLJLJF7F7JFJ|L-J-||L---7FJL7|FJL7L7|||F7F7F----J|FF--7L7FJF7F7FJF--JF---JFJL7F7F7||F7-|.|-J|||FL|JF-\nJJL|L7LJFJLFJ|F-7F-7||F7F7FJF--J||L-JF-JF7F7-|||L7|FJ7F7FJ|F7F7|L7FJLJF7|FJLJ|||||L----7L7L-7L-J|FJLJLJFJF--JF--7|F-J|LJ|||||F7F77F|-L|.L--J\n|77|JL7FJF-JFJL7|L7|LJ|LJ|L7L-7FJL--7L--JLJ|FJ|L7|||F7||L7||LJ||FJL-7FJ||L-7FJ|LJ|F7F7.|FJF7L--7|L--7F-J.L---JF-J||-FJF-J|LJLJLJL7JL7.|.JLJJ\n-7-J|FJ|FJF7|F-JL-JL77L-7L-JF-JL-7F7|F7F7F7|L7L7|LJ||LJ|FJ|L-7LJL7-FJL7LJF-JL7|F-J||||FJ|FJL7F-JL7F7LJF------7L77|L-JFJF7|F---7F7L7F7FF77LJ.\n.7L|-L-JL7|LJ|F7F-7FJF-7L--7L7F-7LJ|LJLJLJLJ.|FJL-7||F-JL7|F7L7F7L7|F-JF7L--7|||F7||||L7|L7FJL--7LJ|F7|F----7L7L-JF--JFJLJL--7||L7L7J-FF7|F|\n7LFJ-|JJFLJF-J|||FJ|FL7|F7FJFJL7|F7L-7F7|F7F7||F7FJ||L7F7|||||LJL7LJL7FJL7F-J|||||||||FJ|FJ|.F77L-7LJ|||-F--J7L7F-JFF7|F7F---J||7L-JJ||J|-|J\n|FJ7L|FFFF-JF-JLJL7L--JLJLJFJF-JLJ|F7||L7|LJ||LJ||FJ|FJ|LJ|||F7F-JF--JL7FJL-7||||||LJ|L7LJFJFJ|F--JF7|LJFJF7F7F|L--7||||LJF--7LJF7F7FL-FF-LF\n77LF.|7LLL--JF--7FL7F7F-7F-JLL7F-7LJLJ|FJ|F7|L-7||L7|L7|F7|||||L-7||F-7||F7FJ|||||L7FJFJF7L-JFJL-7FJLJF7L7|LJL7L7F7LJLJL-7L-7L--JLJL7LFJ|7FJ\nLJF|7L-7|L7F-JF7|F7LJLJJLJF---J|FJF77FJL7LJ||JFJ|L7LJFJLJ|||||L7FJL7|FJ||||L7|||||FJL7|FJL--7|F7FJ|F7FJL-J|F7FJFLJ|F7F-7FJF7L7F-7F7FJ|J-L77J\n-|-L.7J|F|FL--J||||F77F---JF--7|L7|L7L-7L7FJL7|FJFL7FJF7FJLJ||FJ|F-J|L7||||FJ||||||F-JLJF7F7|LJ||FJ||L----J|||F7F7LJ|L7|L-JL-JL7LJLJ.-.F.77.\n.|F|.-.FF77F--7|LJLJL-JF7F7L-7LJLLJFJF7|FJL-7||L7F7|L7|||F-7||L7|L7LL7LJ|||L7|||||||F7F-J||||F7||L7|L7F----J|LJLJL-7|FJ|F7F7F-7|LFL|-|F-7JF7\nF7-|7-F-JL7L-7|L---7F-7|LJL7FJF----J|||||F7F|||FJ|||FJ||LJJ||L7||FJF7L7FJ||-||||||||||L-7|||||LJL7||FJL----7|F7F---JLJFJ||||L7|L77L-7LL.|.77\nJ--77|L7F7L--JL-7F-J|FJ|F-7LJ7L-7F7F-J|||||FJ|||FJ|||FJL7F-J|FJ||L7||FJL7|L7|||||||||L7FJLJ|||F-7||||F-7F--J||LJF7F--7L-JLJL-JL7L77|77F-|7LJ\nFJ-FL-.|||F----7|L-7|L7|L7L--7F-J||L7FJ|||||FJ||L7|||L7FJL-7|L7|L7||LJ7FJ|FJ|||LJ||||FJL-7FJ|LJFJ|||||FJL--7|L--JLJF-JF7F-----7L7|JJ.LFFL|.|\nJJF-J7FLJLJF---JL-7LJFJL7L7F7|L7FJL7|L7|LJLJL7||FJLJ|FJL-7FJL7|L-J|L--7|FJL7||L-7|||||F--JL7L7FJFJ||LJ|F---JL7F7F-7L--JLJF7F-7|-||J|J-FJF---\nLF7--7JFF77L7F---7L-7L--J.LJ|L-J|F-J|FJL-7F--J|||F--JL--7||FL||F--JF7FJ|L-7||L-7|LJLJ||F---JFJL7L7LJFFJL----7LJ||-L-7F7F-J||.LJLLJFJJ.7FJ-|.\n.|J7|J.FJL-7LJF--JF7|F7F7.F7L7F7||F7|L7F-JL--7|||L7F7F-7||L7FJ||F7FJ|L7|F7|||F-JL7FF-J|L7F7FJJ|L7|F--JF7F7F7L7L|L-7J||||F7LJF7F7F7J|FFF7JFFF\nF|||L--L--7|F7L-7FJ|LJLJL-JL-J|||||LJFJL---7J||LJFJ|LJFJ|L7||FJLJ|L7L7|||LJ||L7F7L7|F7|FJ||L-7F-J|L--7|||||L-JFJF7L7|||LJL--JLJ|||7F|JJ|7|J|\n--LJLJJFF-JLJL--J|FJF7F7F7F7F7|||LJF-JF7F--JFJ|F7|FJF7L7L7||||F--JFJ|||||F-JL7||L-JLJ||L-J|F7|L-7L7F-J|LJ||F-7L-JL7|||L7F7F--7FJ|L-7-.---F-7\nF|FJ|-F-L7F7F7F-7|L7|||||||LJ|||L7LL7FJ|L--7L7||LJ|.|L-JFJ||||L7F7L7FJ|||L7F7||L-7F--JL7F-J||L7.L7||F7L7FJLJFJF7F7LJLJ-LJ|L-7|L-JF7|J77FJLJ|\nFLJ7F.LJ|||||LJFJ|FJ|||LJ||F-J||FJF-JL7|F-7L7|||F7L7|F7FJ|||||FJ||FJL7||L7||||L7FJ|F7F7|L7FJ|FJF-J|||L7||F-7L-JLJL7F7-F-7|F-JL7F7|LJLLFJFJ.-\n|F|FFF.F-LJ|L7FJFJL7||L7JLJL--J||7|F-7|LJFJFJ||LJ|FJLJ|L-7LJ||L7|||F-J|L-J||LJFJL7LJ||||FJ|7LJ-L-7||L7LJLJFJF7F7F7LJL7|FJ|L--7|||L--7.--L-7L\nL7-F-JFFJF-JFJL7|F-J|L7L7F-----J|FJ|FJL-7L7|.||F-JL7F7L7FJF7LJFJ||||F7L--7|L7FJF7L-7||||L7L-7F7JFJ|L7L-7F-JFJLJ|||F-7LJL7|F7FJ||L7F-J7JLFJF7\n||7J|FJ-7L-7L-7||L--JFJFJ|F-7F-7|L7|L7F-JFJL7LJL7F7LJL7|L-JL-7L7|||||L7F7||FJL7||F-J||LJFJF7LJL7L-JFJF7||F7L--7LJ|L7|F--JLJLJJ||J|L7--.7|-|F\n-LJ-F7FL-LJL7FJ||F---JFJFJ|FJ|FJ|FJL7|L7FJF7L7F-J||F-7|L---7FJFJ|||LJFJ||||L-7LJ|L7FJ|F-JFJL7F7|F7FJFJLJ||L7F7L-7|FJ|L-------7LJ7L7|-77JF7FL\nFJJ|.L|FFL7F||-LJL7F-7L7L-J|FJL-JL7FJL-JL7||FJ|F7|||FJL---7|L7L7|||F-JFJ|||F7|F-JFJ|FJL-7|7FJ|LJ|LJFJ7F-J|L||L7FJ||F|F7F-----JJFJJLJ|L7F7-7J\n7..|-7LJ-L|-LJ7FLFJ|-|FJ7F-JL7F---JL----7LJ||FJ|||LJL-7F--JL-JFJ|||L-7||||LJ||L-7|JLJF--JL7L7L-7L-7|F7L-7L7|L7||FJL7LJ|L-----77F.FL|7JL-F-JJ\nF.F|LJ77-|LL|7L7|L7L7||.FJF-7|L7F-7F7F-7|F7LJL7|||F---JL7LF7F7L-J|||FJL7||F-JL7FJL--7|F-7FJFJF7|F-JLJL-7|FJL-JLJ|F7L-7L7F-7F-J7|--7.J.F.JJLJ\nJFL.|7FL7J7LFJFLJ-|FJ||FJFJFJL7LJ7|||L7|LJL7F7||||L7F7F7L-JLJL--7LJFJF7|LJL7F7|L-7F7|LJ7|L7L7||||F7F--7||L---7F-J||F-JFJ|J||7.L|-|--|7|L..|.\n.7|FL-|7LL7.F.F7JFJ|FJ||FJ7L7FJ-F-J||FJ|F7FJ|LJ||L7LJ|||F7F7F7F7|F-JFJ|L-7FJ||L7.||||F--JFJ-LJ||LJ|L-7LJL7F--J|F-J|L-7L-J-|L7-LJ.JL-L7-7F--7\n.L-FJ|LJ7F-7J-F-7L-J|FJLJLF-J|F-JF7||||||LJFJF7|L-JF-J|||LJLJLJ|||F7L7|F-JL7|L7|FJ||||F-7L---7LJ.FJF7L7F7LJLF7LJF-JF-J-JJ-L-J.FL7J.|.L.LJ.||\n7-|..--J|J.---|FJ-L7LJ7|7|L7FJ|F7|||||FJL-7|FJ||.F7L-7||L-----7||LJL7|LJ7F7LJFJ|L7|LJLJ-L7F--JF-7L7|L7LJL7JFJL-7|F7L--7J|FLJ-7-||L7F.J--|FF|\nL-7-|J7FJ||F|.LJ7||7FL|J-LJ||LLJLJ||LJL7F-J|L7LJFJ|F7LJ|F-----J||F--JL---JL7-L-JFJL7F---7|L--7L7L-J|J|F-7L7L7F-JLJ|F7FJFF|7LF..L-.FF-JJFL7L-\nL|L|LJ7L.F---J7L|7--LLJFL--LJ|LF--JL-7FJ|F7L7|F7L7LJ|LFJL----7JLJL-7F7F-7F-JF---JF7|L7F7LJF-7|FJF-7L7|L7L7L-JL---7||||L-F|JJL7.LJFF-.-F|-F7.\nF--FL--JFJLJ--JJ||F-7L|7JFL|JJ.L7F7F-JL7LJL7|LJL7|F7L-JF-7F-7L----7||||7LJJFL-7F-J||7LJL-7||LJL-JFJFJ|FJ.|F-7F-7FJ|||L7.F|FF7J.LF-F77LFL.LF7\nLL7JJFLFFJ.|F77.L|-.J|FL77||.|F7LJ|L-7FJF7FJ|F7FJLJL--7|||L7|F--7FJLJ|L7LJ|LJ.LJLFJL7F7-FJL-7LF--JFJFJL-7||FJ|.LJLLJL7L--7-LJFJFF7LF-7||J-L7\n..LJLJ7|L|-F7FFF-J.L77|-L|7J.F|L--JF7||FJ|L7|||L7.F---JL7|FJ|L-7LJ|JL|FJJ.F||.F|FL--J||FJF--JFJF7FJFL-7FJ||L7L-----7LL7F-J-7|F.JL|-JFJ-F.7J.\n7.|-|LLJF--||-.J7.F--7.|.L|.J7L-7F7||||L7|FJLJL-J-L-7F7FJ|L7L7FJJLL-FJL7J.J-|-7FL.F-7|LJFJ|F7L7||L--7L||FJL7|F-7F--J-FJ|JLFLJ|.|-L-L7J.|7.-J\nF77-7L|7F|7FJJ-JJ--JLFF7-L||7|LLLJLJ|||FJ||J.J|L.FF-J||L7L7|FJL-7L|FL--J-7|F-.J|.FL7LJF7L-7|L7LJ|F7FJFJ|L-7|||FJ|7|JL|FJ|-JJ.F-|JL7F7L777-F|\nLLJ-|F7F-J|.L-J..|F-FJ.L7L-.FJ7.LJ|-LJLJLLJLF-F|--L7FJL7|F||L7F-JFLJFJ||J|7JJF-L7|LL7FJL7FJL7L--J|||-L7L-7||||L-J7|--LJLL7J.F|.J7.LJJLJ--7L-\n7F7FLJ--J.|7...FLJF||FJ7F.|7LLL.LF|.LJ7|JL|J||LJ|LFJL7.||FJL7|||-F-LJJF|.JLFF|-7F-LFJ|F-JL7FJF7F7|||F-JF-JLJLJ-J.L||L|JJJ|.FL-7L-777..|.||J.\nLJJ7JLL7LFLL7F|7|FL-7.F-J-LJ|LL-F|JF|FJ--..FLJ7FJ7L7FJFLJL7FJ|L7-L-LL-LJ.FFF777L77.L7|L7F7|L-JLJ||LJL-7L--7J|..|FLJ|J.|J7L77.L7.F||7FF777L..\nL.J7|FFJJJ|||7L-7||LJ-|FF-|L|||FLFJF-FJ77|-7JJFL7JJLJ-|7LLLJLL-J7J.F|||L-|F7|LF|J7.FJ|FJ||L-7F--JL7-F-JF-7|LJ-7-J.F|-JJ.7FLF7--J-JJ.F.|LL-77\n|-|-L7L7FFL|7-7L|L--J.7----J||-F-|J-||FJ7JF-JF7J||-|J.|7..L|..|-|.FL-L7J.|7||.FJ-FFL7|L-J|F-JL--7FJ-|F7|FJ|-J7.FJ7FJJ|J-JJ7J|L7-|LL-J7.F.L|J\n|-F7--777F|||LJ7|L|.F-|F-7JLLLFJ-|F7|FF-7-FJF7L7L|JL-|-7-7L7-FJ|L7---LJL-FJFF.|J.LLJLJ7L|LJJ-LJ7|L7-||LJL-J.L|-|.7LL-JJFFJL--LJ.F--7FL|.F--7\n77|J.FF|-F|J--LF|FL--7L77JL--L7.F|J|F---J|L-JJ.|7F7|7|L.LL-|--L|7J|.FL7|7L-F|-JFJ77LL-L7|.|JFLFFL7L7LJ.F|J||F-.LJJFF|--F-JFJJLF-F7|-JLL7|-|L\nL7JLL7.7-J.L|.L7L7JJL--LL.LJ7-LLJL.-7J.FJ7.F--F|7.L-7---JJ.J..J.7-JFFJ|-F-LFJJ-7-LF--LJ|J-J.L--JLL-JJL-F|--.FJ.FJ.FF7J-L|-J--LJ-L-J-J.L7J.|J`;

function inputToMatrix(input) {
  const data = input.split('\n');
  const rows = data.length;
  const cols = data[0].length;
  let start;
  const matrix = Array.from({length: rows}, () => Array(cols));
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      matrix[row][col] = {
        value: data[row][col],
        row,
        col,
      };
      matrix[row][col].neighbors = tileNeighbors(matrix[row][col], matrix);
      if (matrix[row][col].value == 'S') start = matrix[row][col];
    }
  }
  return {matrix, rows, cols, start};
}

function printMatrix(matrix) {
  for (const row of matrix) {
    console.log(row.map(tile => tile.value).join(''))
  }
}

function tileNeighbors(tile, matrix) {
  const neighbors = [];
  if (tile.value == '.') return [];
  if (tile.value == '|') {
    neighbors.push({row: tile.row - 1, col: tile.col});
    neighbors.push({row: tile.row + 1, col: tile.col});
  } else if (tile.value == '-') {
    neighbors.push({row: tile.row, col: tile.col - 1});
    neighbors.push({row: tile.row, col: tile.col + 1});
  } else if (tile.value == 'L') {
    neighbors.push({row: tile.row - 1, col: tile.col});
    neighbors.push({row: tile.row, col: tile.col + 1});
  } else if (tile.value == 'J') {
    neighbors.push({row: tile.row - 1, col: tile.col});
    neighbors.push({row: tile.row, col: tile.col - 1});
  } else if (tile.value == '7') {
    neighbors.push({row: tile.row + 1, col: tile.col});
    neighbors.push({row: tile.row, col: tile.col - 1});
  } else if (tile.value == 'F') {
    neighbors.push({row: tile.row + 1, col: tile.col});
    neighbors.push({row: tile.row, col: tile.col + 1});
  }
  return neighbors.filter(n => isValidRowCol(n.row, n.col, matrix));
}

function isValidRowCol(row, col, matrix) {
  return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length;
}

function getDestination(from, tile, matrix) {
  const dest = tile.neighbors.find(n => n.row != from.row ||  n.col != from.col)
  if (!dest) return null;
  return matrix[dest.row][dest.col];
}

const {matrix, rows, cols, start} = inputToMatrix(input);

// Part 1
let maxLoop = [];
for (const tileType of ['|', '-', 'L', 'J', '7', 'F']) {
  start.value = tileType;
  start.neighbors = tileNeighbors(start, matrix);
  let from = start;
  let destination = matrix[from.neighbors[0].row][from.neighbors[0].col];
  let loop = [start];
  while (destination && destination != start) {
    const nextDest = getDestination(from, destination, matrix);
    from = destination;
    loop.push(from);
    destination = nextDest;
  }
  if (destination != start) continue;
  if (loop.length > maxLoop.length) maxLoop = loop;
}
console.log((maxLoop.length) / 2);


// Part 2
const matrixDoubled = Array.from({length: rows * 2 + 1}, () => {
  return Array.from({length: cols * 2 + 1}, () => ({value: '.'}));
});
const theLoopSet = new Set(maxLoop.map(tile => `${tile.row * 2 + 1}:${tile.col * 2 + 1}`));

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const dblRow = row * 2 + 1;
    const dblCol = col * 2 + 1;
    matrixDoubled[dblRow][dblCol] = {...matrix[row][col]};
  }
}

for (let row = 0; row < matrixDoubled.length; row++) {
  for (let col = 0; col < matrixDoubled[0].length; col++) {
    matrixDoubled[row][col].row = row;
    matrixDoubled[row][col].col = col;
    if (theLoopSet.has(`${row}:${col}`)) {
      const neighbors = tileNeighbors(matrixDoubled[row][col], matrixDoubled);
      matrixDoubled[row][col].value = 'X';
      for (const n of neighbors) matrixDoubled[n.row][n.col].value = 'X';
    }
  }
}

function tileNeighborsP2(tile, matrix) {
  const neighbors = [
    {row: tile.row - 1, col: tile.col}, // N
    {row: tile.row, col: tile.col + 1}, // E
    {row: tile.row + 1, col: tile.col}, // S
    {row: tile.row, col: tile.col - 1}, // W
  ];
  return neighbors
    .filter(n => isValidRowCol(n.row, n.col, matrix))
    .filter(n => matrix[n.row][n.col].value != 'X');
}

// Breadth First Search BFS
function bfs(row, col, matrix) {
  const flowMap = new Map();
  // The flowMap is a map of coord to the coord of the next tile to go to
  // The frontier will store the cells who needs to be visited
  const frontier = [];
  frontier.push({row, col});
  flowMap.set(`${row}:${col}`, {row, col});

  while (frontier.length > 0) {

    const cell = frontier.shift();
    const neighbors = tileNeighborsP2(matrix[cell.row][cell.col], matrix);
    for (const neighbor of neighbors) {
      if (flowMap.has(`${neighbor.row}:${neighbor.col}`)) continue;
      frontier.push(neighbor);
      flowMap.set(`${neighbor.row}:${neighbor.col}`, neighbor);
    }
  }
  return flowMap;
}

const flowMap = bfs(0, 0, matrixDoubled);
for (const tile of flowMap.values()) {
  matrixDoubled[tile.row][tile.col].value = 'X';
}

let sum = 0;
for (let row = 1; row < matrixDoubled.length; row+=2) {
  for (let col = 1; col < matrixDoubled[0].length; col+=2) {
    if (matrixDoubled[row][col].value != 'X') sum++
  }
}
console.log(sum);