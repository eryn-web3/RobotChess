
export const colorPalettes = {
  default: {
    name: "Standard",
    background: "rgb(240, 220, 180)",
    props: {
      whiteCells: "rgb(255, 205, 160)",
      blackCells: "rgb(210, 140, 70)",
      validBG: "red",
      selectedBG: "brown",
      selectedColor: "lightblue"
    }
  },
  blue: {
    name: "Light blue ocean",
    background: "rgb(220, 255, 245)",
    props: {
      whiteCells: "rgb(225, 225, 225)",
      blackCells: "rgb(110, 130, 180)",
      validBG: "rgb(255, 100, 45)",
      selectedBG: "rgb(155, 0, 0)",
      selectedColor: "lightgreen"
    }
  },
  green: {
    name: "Green",
    background: "rgb(235, 255, 205)",
    props: {
      whiteCells: "rgb(240, 240, 210)",
      blackCells: "rgb(120, 150, 85)",
      validBG: "rgb(255, 253, 158)",
      selectedBG: "rgb(70, 0, 165)",
      selectedColor: "rgb(255, 255, 155)"
    }
  },
  sweet: {
    name: "Sweety",
    background: "rgb(255, 234, 248)",
    props: {
      whiteCells: "rgb(255, 215, 215)",
      blackCells: "rgb(230, 110, 110)",
      validBG: "rgb(70, 0, 165)",
      selectedBG: "rgb(185, 75, 0)",
      selectedColor: "rgb(135, 255, 235)"
    }
  },
  gray: {
    name: "Grayscale",
    background: "rgb(255, 255, 255)",
    props: {
      whiteCells: "rgb(255, 255, 255)",
      blackCells: "rgb(100, 100, 100)",
      validBG: "rgb(205, 205, 205)",
      selectedBG: "rgb(5, 5, 5)",
      selectedColor: "rgb(250, 250, 250)"
    }
  },
  cyan: {
    name: "Cyan",
    background: "rgb(235, 255, 255)",
    props: {
      whiteCells: "rgb(200, 225, 225)",
      blackCells: "rgb(8,164,167)",
      validBG: "rgb(250, 200, 200)",
      selectedBG: "rgb(80, 0, 40)",
      selectedColor: "rgb(135, 255, 210)"
    }
  }
};

export const possiblePalettes = () => {
  const palettesArray = [];
  let key;
  for (key in colorPalettes) {
    palettesArray.push({ label: colorPalettes[key].name, value: key });
  }

  return palettesArray;
};

export const strings = {
  welcomeTitle: {
    en: "Welcome",
    bg: "Добре дошли",
    ru: "Добро пожаловать!",
    sp: "Bienvenido",
    it: "benvenuto",
    fr: "Bienvenue",
    jp: "ようこそ",
    kr: "환영합니다",
    cn: "欢迎光临",
    zh: "歡迎",
  },
  selectMode: {
    en: "Choose game mode",
    bg: "Изберете начин за игра",
    ru: "Выберите игровой режим",
    sp: "Elige el modo de juego",
    it: "Scegli la modalità di gioco",
    fr: "Choisissez le mode de jeu",
    jp: "ゲームモードを選択",
    kr: "게임 모드를 선택하십시오",
    cn: "选择游戏模式",
    zh: "選擇遊戲模式",
  },
  playAgainstRobot: {
    en: "Play versus Robot",
    bg: "Игра срещу Robot",
    ru: "Игра против Robot",
    sp: "Jugar contra robot",
    it: "Gioca contro Robot",
    fr: "Jouer contre robot",
    jp: "プレイ対ロボット",
    kr: "플레이 대 로봇",
    cn: "游戏与机器人",
    zh: "遊戲與機器人",
  },
  easy: {
    en: "Easy",
    bg: "Лесно",
    ru: "Легко",
    sp: "Fácil",
    it: "facile",
    fr: "Facile",
    jp: "かんたん",
    kr: "쉬움",
    cn: "容易",
    zh: "簡單",
  },
  medium: {
    en: "Medium",
    bg: "Средно",
    ru: "Средний",
    sp: "Medio",
    it: "medio",
    fr: "Moyen",
    jp: "中",
    kr: "중간",
    cn: "中号",
    zh: "介質",
  },
  hard: {
    en: "Hard",
    bg: "Трудно",
    ru: "Жесткий",
    sp: "Duro",
    it: "difficile",
    fr: "Dur",
    jp: "ハード",
    kr: "열심히",
    cn: "辛苦",
    zh: "硬",
  },
  or: {
    en: "or",
    bg: "или",
    ru: "или",
    sp: "O",
    it: "o",
    fr: "Ou",
    jp: "または",
    kr: "또는",
    cn: "或",
    zh: "要么",
  },
  singleplayer: {
    en: "Start singleplayer",
    bg: "Започнете singleplayer",
    ru: "Пуск singleplayer",
    sp: "Iniciar un jugador",
    it: "Avvia singleplayer",
    fr: "Commencer le mode solo",
    jp: "シングルプレイヤーを開始",
    kr: "싱글 플레이어 시작",
    cn: "开始单人游戏",
    zh: "開始單人遊戲",
  },
  singleplayerDescription: {
    en: "Start singleplayer or play versus robot:",
    bg: "Започнете singleplayer или игра срещу приятел:",
    ru: "Пуск singleplayer:",
    sp: "Iniciar un jugador o jugar contra robot:",
    it: "Avvia singleplayer o gioca contro robot:",
    fr: "Commencez le mode solo ou jouez contre un robot:",
    jp: "シングルプレイヤーを開始するか、ロボットと対戦する:",
    kr: "싱글 플레이어 또는 게임 대 로봇 시작:",
    cn: "开始单人游戏或对战机器人:",
    zh: "開始單人遊戲或對戰機器人：",
  },
  hardModeWarning: {
    en:
      'Warning: The Robot may require longer time to make its turn on the "hard" level!',
    bg:
      "Внимание: Robot алгоритъма може да се нуждае от повече време, за да направи ход, ако изберете най-трудното ниво!",
    ru:
      "Предупреждение: алгоритму Robot может потребоваться больше времени, чтобы сделать ход, если вы выберете самый сложный уровень!",
    sp: "Advertencia: ¡el robot puede necesitar más tiempo para girar en el nivel \"difícil\"!",
    it: "Avvertenza: il robot potrebbe richiedere più tempo per girare il livello \"difficile\"!",
    fr: "Avertissement: Le robot peut avoir besoin de plus de temps pour passer au niveau \"difficile\"!",
    jp: "警告：ロボットは、「ハード」レベルでターンするのにより長い時間が必要な場合があります！",
    kr: "경고 : 로봇이 하드레벨을 켤 때 더 오랜 시간이 걸릴 수 있습니다!",
    cn: "警告：机器人可能需要更长的时间才能将其转到“硬”位置！",
    zh: "警告：機器人可能需要更長的時間才能將其轉到“硬”位置！",
  },
  placeOnTheSurface: {
    en: "Place your device horizontally on the surface and",
    bg: "Поставете устройството си на плоска повърхност и",
    ru: "Поместите устройство горизонтально на поверхность и",
    sp: "Coloque su dispositivo horizontalmente en la superficie y",
    it: "Posiziona il dispositivo in orizzontale sulla superficie e",
    fr: "Placez votre appareil horizontalement sur la surface et",
    jp: "デバイスを表面に水平に置き、",
    kr: "기기를 표면에 수평으로 놓고",
    cn: "将设备水平放置在表面上，然后",
    zh: "將設備水平放置在表面上，然後",
  },
  back: {
    en: "back",
    bg: "обратно",
    ru: "обратно",
    sp: "Volver",
    it: "indietro",
    fr: "Retour",
    jp: "戻る",
    kr: "다시",
    cn: "回去",
    zh: "背部",
  },
  realBoardExperience: {
    en: "the black figures - for real board experience",
    bg: "черните фигури - за преживяване, като на истинска шах дъска",
    ru: "черные фигуры - за преживяване, като на истинска шах дъска",
    sp: "Le figure nere - per una vera esperienza a bordo",
    it: "Les chiffres noirs - pour une expérience réelle du conseil",
    fr: "Las figuras negras: para una experiencia de tablero real",
    jp: "黒い数字-実際のボード体験",
    kr: "검은 인물-실제 보드 경험",
    cn: "黑色数字-真正的董事会经验",
    zh: "黑色數字-真正的董事會經驗",
  },
  letStart: {
    en: "Let's start singleplayer!",
    bg: "Нека започнем със singleplayer",
    ru: "Давайте начнем singleplayer!",
    sp: "¡Comencemos para un jugador!",
    it: "Iniziamo singleplayer!",
    fr: "Commençons le mode solo!",
    jp: "シングルプレイヤーを始めましょう！",
    kr: "싱글 플레이어를 시작합시다!",
    cn: "让我们开始单人游戏！",
    zh: "讓我們開始單人遊戲！",
  },
  settings: {
    en: "Settings",
    bg: "Настройки",
    ru: "Настройки",
    sp: "Configuraciones",
    it: "impostazioni",
    fr: "Paramètres",
    jp: "設定",
    kr: "설정",
    cn: "设定",
    zh: "設定",
  },
  newGame: {
    en: "New Game",
    bg: "Нова игра",
    ru: "Новая игра",
    sp: "Nuevo juego",
    it: "Nuovo gioco",
    fr: "Nouveau jeu",
    jp: "新しいゲーム",
    kr: "새로운 게임",
    cn: "新游戏",
    zh: "新遊戲",
  },
  startGameAndSelectMode: {
    en: "(Start a new game first and then select game mode)",
    bg:
      '(Започнете нова игра, а после изберете начин за игра от "welcome меню"-то)',
    ru: "(Сначала запустите новую игру, затем выберите игровой режим)",
    sp: "(Comience un nuevo juego primero y luego seleccione el modo de juego)",
    it: "(Inizia prima una nuova partita e poi seleziona la modalità di gioco)",
    fr: "(Commencez par commencer une nouvelle partie, puis sélectionnez le mode de jeu)",
    jp: "（最初に新しいゲームを開始してからゲームモードを選択します）",
    kr: "(새 게임을 먼저 시작한 다음 게임 모드를 선택하십시오)",
    cn: "（首先开始一个新游戏，然后选择游戏模式）",
    zh: "（首先開始一個新遊戲，然後選擇遊戲模式）",
  },
  showValidMoves: {
    en: "Show the valid moves on the board",
    bg: "Показване на валидните ходове върху дъската",
    ru: "Показать действительные ходы на доске",
    sp: "Mostrar los movimientos válidos en el tablero",
    it: "Mostra le mosse valide sul tabellone",
    fr: "Afficher les coups valides sur le tableau",
    jp: "ボード上の有効な動きを表示する",
    kr: "보드에 유효한 움직임을 보여",
    cn: "在板上显示有效的动作",
    zh: "在板上顯示有效的動作",
  },
  selectPalette: {
    en: "Choose one of our chessboard color palettes",
    bg: "Изберете цветова палитра за шах дъската",
    ru: "Выберите цветовую палитру:",
    sp: "Elige una de nuestras paletas de colores de tablero de ajedrez",
    it: "Scegli una delle nostre tavolozze di colori della scacchiera",
    fr: "Choisissez l'une de nos palettes de couleurs d'échiquier",
    jp: "チェス盤のカラーパレットを選択してください",
    kr: "체스 판 색상 팔레트 중 하나를 선택하십시오",
    cn: "选择我们的一种棋盘调色板",
    zh: "選擇我們的一種棋盤調色板",
  },
  colorPalettes: {
    en: "Color palettes",
    bg: "Цветови палитри",
    ru: "Цветовую палитру",
    sp: "Paletas de colores",
    it: "Tavolozze di colori",
    fr: "Palettes de couleurs",
    jp: "カラーパレット",
    kr: "컬러 팔레트",
    cn: "调色板",
    zh: "調色板",
  },
  personalize: {
    en: "personalize",
    bg: "персонализиране",
    ru: "предпочтения",
    sp: "Personalizar",
    it: "personalizzare",
    fr: "Personnaliser",
    jp: "パーソナライズ",
    kr: "개인화",
    cn: "个性化",
    zh: "個性化",
  },
  personalizeSettingsLabel: {
    en:
      "Set your preferences which will be kept even after you restart the app",
    bg:
      "Задайте предпочитанията си, които ще се запаметят дори след рестартиране",
    ru:
      "Задайте настройки, которые будут сохранены даже после перезапуска приложения",
    sp: "Establezca sus preferencias que se mantendrán incluso después de reiniciar la aplicación",
    it: "Imposta le tue preferenze che verranno conservate anche dopo aver riavviato l'app",
    fr: "Définissez vos préférences qui seront conservées même après le redémarrage de l'application",
    jp: "アプリを再起動した後も保持されるプリファレンスを設定します",
    kr: "앱을 다시 시작한 후에도 유지되는 환경 설정",
    cn: "设置您的首选项，即使您重新启动应用程序，该首选项也将保留",
    zh: "設置您的首選項，即使您重新啟動應用程序，該首選項也將保留",
  },
  checkOutPalettes: {
    en:
      "Check out all color palettes to select the best one for you on our website!",
    bg: "Разгледайте всички цветови палитри от Robot Chess на нашия уебсайт!",
    ru:
      "Посмотрите все цветовые палитры, чтобы выбрать лучший для вас на нашем сайте!",
    sp: "¡Vea todas las paletas de colores para seleccionar la mejor para usted en nuestro sitio web!",
    it: "Scopri tutte le tavolozze dei colori per selezionare quella migliore per te sul nostro sito Web!",
    fr: "Découvrez toutes les palettes de couleurs pour choisir celle qui vous convient le mieux sur notre site!",
    jp: "すべてのカラーパレットをチェックして、当社のWebサイトで最適なパレットを選択してください！",
    kr: "웹 사이트에서 가장 적합한 색상을 선택하려면 모든 색상 표를 확인하십시오!",
    cn: "在我们的网站上查看所有调色板以选择最适合您的调色板！",
    zh: "在我們的網站上查看所有調色板以選擇最適合您的調色板！",
  },
  lang: {
    en: "Language",
    bg: "Език",
    ru: "Язык",
    sp: "Idioma",
    it: "lingua",
    fr: "Langue",
    jp: "言語",
    kr: "언어",
    cn: "语言",
    zh: "語言",
  },
  okaySettings: {
    en: "Okay",
    bg: "Готово",
    ru: "Готовый",
    sp: "Esta bien",
    it: "va bene",
    fr: "D'accord",
    jp: "わかった",
    kr: "알았어",
    cn: "好的",
    zh: "好的",
  },
  okayNative: {
    en: "Okay",
    bg: "Добре",
    ru: "Хорошо",
    sp: "Esta bien",
    it: "va bene",
    fr: "D'accord",
    jp: "わかった",
    kr: "알았어",
    cn: "好的",
    zh: "好的",
  },
  cancel: {
    en: "Cancel",
    bg: "Отказ",
    ru: "Отмена",
    sp: "Cancelar",
    it: "annullare",
    fr: "Annuler",
    jp: "キャンセルする",
    kr: "취소",
    cn: "取消",
    zh: "取消",
  },
  rotateBlackPiecesSetting: {
    en: "Rotate the black figures",
    bg: "Завъртете черните фигури",
    ru: "Поверните черные фигуры",
    sp: "Gira las figuras negras",
    it: "Ruota le figure nere",
    fr: "Faire pivoter les chiffres noirs",
    jp: "黒い数字を回転させる",
    kr: "검은 색 숫자를 회전",
    cn: "旋转黑色数字",
    zh: "旋轉黑色數字",
  },
  rotateBlackPiecesLabel: {
    en:
      "Rotate the pieces for better experience, especially if you're two players on the device.",
    bg:
      "Завъртете фигурите за по-добър ефект, особено ако двама играчи играете на това устройство!",
    ru:
      "Поверните шахматные фигуры для лучшего опыта, особенно если вы два игрока на устройстве.",
    sp: "Gire las piezas para una mejor experiencia, especialmente si son dos jugadores en el dispositivo.",
    it: "Ruota i pezzi per una migliore esperienza, specialmente se sei due giocatori sul dispositivo.",
    fr: "Faites pivoter les morceaux pour une meilleure expérience, surtout si vous êtes deux joueurs sur l'appareil.",
    jp: "特にデバイスで2人のプレーヤーを使用している場合は、より良い体験のためにピースを回転させます。",
    kr: "더 나은 경험을 위해 조각을 회전하십시오. 특히 장치에서 두 명의 플레이어 인 경우.",
    cn: "旋转乐曲以获得更好的体验，尤其是当您是设备上的两个玩家时。",
    zh: "旋轉樂曲以獲得更好的體驗，尤其是當您是設備上的兩個玩家時。",
  },
  gameOver: {
    en: "The game is over",
    bg: "Играта свърши",
    ru: "Игра окончена",
    sp: "El juego ha terminado",
    it: "Il gioco è finito",
    fr: "Le jeu est terminé",
    jp: "ゲームオーバーです",
    kr: "게임은 끝났다",
    cn: "游戏结束了",
    zh: "遊戲結束了",
  },
  takeLook: {
    en: "TAKE A LOOK",
    bg: "ПОКАЖИ",
    ru: "ПОКАЖИТЕ МЭ",
    sp: "Echar un vistazo",
    it: "GUARDA",
    fr: "PRENDRE UN REGARD",
    jp: "見る",
    kr: "봐",
    cn: "看一看",
    zh: "看一看",
  },
  sourceCode: {
    en: "Source code",
    ru: "Source код",
    bg: "Source код",
    sp: "Código fuente",
    it: "Codice sorgente",
    fr: "Code source",
    jp: "ソースコード",
    kr: "소스 코드",
    cn: "源代码",
    zh: "源代碼",
  },
  license: {
    en: "License",
    bg: "Лиценз",
    ru: "Лицензия",
    sp: "Licencia",
    it: "licenza",
    fr: "Licence",
    jp: "免許",
    kr: "라이센스",
    cn: "执照",
    zh: "執照",
  },
  contactUs: {
    en: "or contact us: ",
    bg: "или се свържете с нас: ",
    ru: "или свяжитесь с нами: ",
    sp: "O contáctenos:",
    it: "Oppure contattaci:",
    fr: "Ou contactez nous:",
    jp: "またはお問い合わせ：",
    kr: "또는 저희에게 연락하십시오 :",
    cn: "或与我们联系：",
    zh: "或與我們聯繫：",
  },
  reportProblem: {
    en: "Report a problem ",
    bg: "Съобщете за проблем ",
    ru: "Сообщить о проблеме ",
    sp: "Informar un problema",
    it: "Segnala un problema",
    fr: "Signaler un problème",
    jp: "問題を報告する",
    kr: "문제 신고",
    cn: "报告问题",
    zh: "報告一個問題",
  },
  learnToPlay: {
    en: "Learn how to play chess here",
    bg: "Научете как да играете шах",
    ru: "Узнайте, как играть в шахматы здесь",
    sp: "Aprende a jugar ajedrez aquí",
    it: "Scopri come giocare a scacchi qui",
    fr: "Apprenez à jouer aux échecs ici",
    jp: "チェスのプレイ方法はこちら",
    kr: "체스를하는 방법 알아보기",
    cn: "在这里学习下棋",
    zh: "在這裡學習下棋",
  },
  promotePawn: {
    en: "Select a piece to promote to: ",
    bg: "Изберете фигура, в която да превърнете пешката",
    ru: "Выберите форму, чтобы превратить пешку",
    sp: "Seleccione una pieza para promover a:",
    it: "Seleziona un pezzo da promuovere per:",
    fr: "Sélectionnez une pièce à promouvoir pour:",
    jp: "宣伝する作品を選択してください：",
    kr: "홍보 할 작품을 선택하십시오.",
    cn: "选择一件作品提升为：",
    zh: "選擇一件作品提升為：",
  },
  close: {
    en: "Close",
    bg: "Затвори",
    ru: "Закрыть",
    sp: "Cerrar",
    it: "vicino",
    fr: "Fermer",
    jp: "閉じる",
    kr: "닫기",
    cn: "关门",
    zh: "關",
  },
  hideThis: {
    en: "Hide this",
    bg: "Скрий това",
    ru: "Скрыть это",
    sp: "Ocultar esto",
    it: "Nascondi questo",
    fr: "Cacher ça",
    jp: "これを隠す",
    kr: "이것을 숨기기",
    cn: "隐藏这个",
    zh: "隱藏這個",
  },
  checkmate: {
    en: "Checkmate!",
    bg: "Шах и мат!",
    ru: "Шах и мат!",
    sp: "Jaque mate!",
    it: "Scacco matto!",
    fr: "Maté!",
    jp: "チェックメイト！",
    kr: "장군!",
    cn: "将死！",
    zh: "將死！",
  },
  stalemate: {
    en: "Stalemate",
    bg: "Пат",
    ru: "Пат",
    sp: "Estancamiento",
    it: "stallo",
    fr: "Impasse",
    jp: "膠着",
    kr: "교착 상태",
    cn: "僵持状态",
    zh: "僵持狀態",
  },
  draw: {
    en: "Draw",
    bg: "Равенство",
    ru: "Безвыходное положение",
    sp: "Dibujar",
    it: "disegnare",
    fr: "Dessiner",
    jp: "描く",
    kr: "추첨",
    cn: "抽奖",
    zh: "畫",
  },
  whiteWon: {
    en: "The white player won!",
    bg: "Белият играч победи!",
    ru: "Победил белый игрок!",
    sp: "¡El jugador blanco ganó!",
    it: "Il giocatore bianco ha vinto!",
    fr: "Le joueur blanc a gagné!",
    jp: "白いプレイヤーが勝ちました！",
    kr: "백인 플레이어가 승리했습니다!",
    cn: "白人选手赢了！",
    zh: "白人選手贏了！",
  },
  blackWon: {
    en: "The black player won!",
    bg: "Черният играч победи!",
    ru: "Победил черный игрок!",
    sp: "¡El jugador negro ganó!",
    it: "Il giocatore nero ha vinto!",
    fr: "Le joueur noir a gagné!",
    jp: "黒人プレイヤーが勝ちました！",
    kr: "흑인 플레이어가 승리했습니다!",
    cn: "黑人选手赢了！",
    zh: "黑人選手贏了！",
  },
  robotWon: {
    en: "The robot won!",
    bg: "Robot играч победи!",
    ru: "Победил Robot игрок!",
    sp: "El robot ganó!",
    it: "Il robot ha vinto!",
    fr: "Le robot a gagné!",
    jp: "ロボットが勝った！",
    kr: "로봇이 승리했습니다!",
    cn: "机器人赢了！",
    zh: "機器人贏了！",
  },
  chooseLang: {
    en:
      "Choose a language.\nAll game modals, dialogues and texts will be displayed on that language.",
    bg:
      "Изберете език.\nВсички надписи в играта ще бъдат показвани на този език.",
    ru: "Выберите язык.\nВсе титры в игре будут отображаться на этом языке.",
    sp: "Elija un idioma. Todos los modales, diálogos y textos del juego se mostrarán en ese idioma.",
    it: "Scegli una lingua Tutti i modi di gioco, i dialoghi e i testi verranno visualizzati in quella lingua.",
    fr: "Choisissez une langue: tous les modaux de jeu, dialogues et textes seront affichés dans cette langue.",
    jp: "言語を選択すると、すべてのゲームモーダル、ダイアログ、テキストがその言語で表示されます。",
    kr: "언어를 선택하십시오. 모든 게임 모드, 대화 및 텍스트가 해당 언어로 표시됩니다.",
    cn: "选择一种语言。所有游戏模式，对话和文本都将以该语言显示。",
    zh: "選擇一種語言。所有遊戲模式，對話和文本都將以該語言顯示。",
  },
  invalidMove: {
    en: "Invalid move...",
    bg: "Невалиден ход...",
    ru: "Неверный ход ...",
    sp: "Movimiento inválido ...",
    it: "Mossa non valida ...",
    fr: "Mouvement invalide ...",
    jp: "無効な移動...",
    kr: "잘못된 이동 ...",
    cn: "无效的举动...",
    zh: "無效的舉動...",
  },
  RobotPromoted: {
    en: "The Robot promoted one of his pawns!",
    bg: "Противникът произведе една от пешките си!",
    ru: "Противник произвел одну из своих пешек!",
    sp: "¡El robot promovió uno de sus peones!",
    it: "Il robot ha promosso una delle sue pedine!",
    fr: "Le robot a promu l'un de ses pions!",
    jp: "ロボットは彼のポーンの1つを宣伝しました！",
    kr: "로봇은 그의 폰 중 하나를 홍보했습니다!",
    cn: "机器人提升了他的一只棋子！",
    zh: "機器人提升了他的一隻棋子！",
  },
  RobotThinking: {
    en: "Plеase wait while our Robot is thinking...",
    bg: "Моля изчакайте докато противника ви мисли...",
    ru: "Подождите, пока ваш оппонент не подумает...",
    sp: "Espere mientras nuestro robot está pensando ...",
    it: "Aspetta mentre il nostro robot sta pensando ...",
    fr: "Veuillez patienter pendant que notre robot réfléchit ...",
    jp: "ロボットが考えている間お待ちください...",
    kr: "로봇이 생각하는 동안 기다려주십시오 ...",
    cn: "请稍等，我们的机器人正在思考...",
    zh: "請稍等，我們的機器人正在思考...",
  },
  about: {
    initial: {
      en:
        "The game can be fun in many aspects. You can play versus friends on your own device or vs Robot in two levels - Easy or Medium... and all this - offline! New Robot levels, multy-player mode, leaderboards and more will be rolled out in future releases. Robot Chess also has extra features for better experience. One of them are the custom color palettes - way to customize the chessboard with the colors you prefer! Go to the settings and see them in action! Also if you're using bigger device you can place it on the surface, rotate the black pieces from the settings and fell like you're on real chess board.",
      ru:
        "Robot Chess - это игра с открытым исходным кодом, которая подходит для любого возраста. Приложение проверено в Google Play Protect, обозначенное как PEGI 3, и распространяется под лицензией Apache 2.0. \n\nИгра может быть интересной во многих аспектах. Вы можете играть против друзей на своем собственном устройстве или против Robot на двух уровнях - Easy или Medium ... и все это - офлайн! В будущих выпусках будут развернуты новые уровни Robot, многопользовательский режим, списки лидеров и многое другое. Robot Chess также имеет дополнительные возможности для лучшего опыта. Одна из них - пользовательские цветовые палитры - способ настройки шахматной доски с цветами, которые вы предпочитаете! Перейдите в настройки и увидите их в действии! Также, если вы используете большее устройство, вы можете разместить его на поверхности, повернуть черные фигуры из настроек и упасть, как на реальной шахматной доске.",
      bg:
        'Robot Chess е open-source шах игра, която е подходяща за всички възрастови групи. Проложението е проверено от Google Play Protect и лицензирано под Apache 2.0 лиценза. \n\nИграта е забавна по всяко време! Може да играете срещу вашите приятели на това устройство (single-player) или срещу нашия Robot алгоритъм в две нива на трудност. Robot Chess също поддържа функция за завъртане на черните фигури за "преживяване като на истинска шах дъска". Всички тези начини за игра НЕ изискват връзка с интернет и могат да се използват офлайн. Цветовите палитри са нруга функция, която ви позволява да персонализирате шах дъската с цветовете, които харесвате. \n\nСъщо така повече Robot нива, мултиплейър и др., може да очаквате в бъдещи версии.',
      sp: "El juego puede ser divertido en muchos aspectos: puedes jugar contra amigos en tu propio dispositivo o contra Robot en dos niveles: fácil o medio ... y todo esto, sin conexión: nuevos niveles de robot, modo multijugador, tablas de clasificación y mucho más. Se lanzará en futuras versiones. Robot Chess también tiene características adicionales para una mejor experiencia. Una de ellas son las paletas de colores personalizadas: ¡forma de personalizar el tablero de ajedrez con los colores que prefiera! ¡Vaya a la configuración y véalos en acción! Si usa un dispositivo más grande, puede colocarlo en la superficie, rotar las piezas negras de la configuración y caer como si estuviera en un tablero de ajedrez real.",
      it: "Il gioco può essere divertente sotto molti aspetti: puoi giocare contro amici sul tuo dispositivo o contro Robot in due livelli - Facile o Medio ... e tutto questo - offline! Nuovi livelli di Robot, modalità multigiocatore, classifiche e altro ancora Distribuibile nelle versioni future, Robot Chess ha anche funzioni extra per una migliore esperienza, una delle quali è la tavolozza dei colori personalizzata: il modo per personalizzare la scacchiera con i colori che preferisci! Vai alle impostazioni e vederli in azione! Anche se Usando un dispositivo più grande puoi posizionarlo sulla superficie, ruotare i pezzi neri dalle impostazioni e cadere come se fossi su una vera scacchiera.",
      fr: "Le jeu peut être amusant à bien des égards: jouer contre des amis sur son propre appareil ou contre un robot sur deux niveaux: facile ou moyen… et tout cela hors ligne! Nouveaux niveaux de robot, mode multi-joueurs, classements, etc. Robot Chess propose également des fonctionnalités supplémentaires pour une meilleure expérience, parmi lesquelles les palettes de couleurs personnalisées - une manière de personnaliser l'échiquier avec les couleurs que vous préférez! Accédez aux paramètres et voyez-les en action! Avec un appareil plus grand, vous pouvez le placer à la surface, faire pivoter les pièces noires des réglages et tomber comme si vous étiez sur un véritable échiquier.",
      jp: "ゲームはさまざまな面で楽しいことができます。自分のデバイスで友達と対戦したり、2つのレベル（簡単または中程度）でロボットと対戦したり、オフラインでプレイしたりできます！新しいロボットレベル、マルチプレイヤーモード、リーダーボードなど ロボットチェスには、より良い体験のための追加機能もあります。そのうちの1つは、カスタムカラーパレット-好みの色でチェス盤をカスタマイズする方法です！設定に移動して、実際に見てください！ より大きなデバイスを使用している場合は、表面に配置し、設定から黒い部分を回転させて、実際のチェス盤のように落ちます。",
      kr: "이 게임은 여러 측면에서 재미있을 수 있습니다. 손쉬운 또는 중간 수준의 두 가지 수준에서 자신의 장치 또는 로봇 대 친구와 친구 대 게임을 할 수 있습니다.이 모든 것은 오프라인입니다! 새로운 로봇 수준, 멀티 플레이어 모드, 리더 보드 등 향후 릴리스에서 출시 될 예정입니다 .Robot Chess에는 더 나은 경험을위한 추가 기능이 있습니다. 그 중 하나는 사용자 정의 색상 표입니다. 원하는 색상으로 체스 판을 사용자 정의하는 방법입니다! 설정으로 이동하여 작동 상태를 확인하십시오! '더 큰 장치를 사용하면 표면에 놓고 검은 색 조각을 회전시켜 실제 체스 보드에있는 것처럼 떨어질 수 있습니다.",
      cn: "游戏可以在很多方面很有趣。 您可以在自己的设备上与朋友对战，也可以在两个级别中与机器人对战-轻松或中级...所有这些-离线！ 新的机器人级别，多人游戏模式，排行榜等将在将来的版本中推出。 Robot Chess还具有其他功能，可提供更好的体验。 自定义调色板就是其中之一-用您喜欢的颜色自定义棋盘的方法！ 转到设置并查看它们的实际效果！ 另外，如果您使用更大的设备，则可以将其放在表面上，从设置中旋转黑色部分，然后像掉在真正的国际象棋棋盘上一样掉下来。",
      zh: "遊戲可以在很多方面很有趣。 您可以在自己的設備上與朋友對戰，也可以在兩個級別中與機器人對戰-輕鬆或中級...所有這些-離線！ 新的機器人級別，多人遊戲模式，排行榜等將在將來的版本中推出。 Robot Chess還具有其他功能，可提供更好的體驗。 自定義調色板就是其中之一-用您喜歡的顏色自定義棋盤的方法！ 轉到設置並查看它們的實際效果！ 另外，如果您使用更大的設備，則可以將其放在表面上，從設置中旋轉黑色部分，然後像掉在真正的國際象棋棋盤上一樣掉下來。",
    },
    label: {
      en: "About",
      bg: "За нас",
      ru: "О нас",
      sp: "Acerca de",
      it: "Di",
      fr: "À propos",
      jp: "約",
      kr: "약",
      cn: "关于",
      zh: "關於",
    }
  },
  privacy: {
    en: "Privacy Policy",
    bg: "Поверителност",
    ru: "Конфиденциальность",
    sp: "Política de privacidad",
    it: "politica sulla riservatezza",
    fr: "Politique de confidentialité",
    jp: "個人情報保護方針",
    kr: "개인 정보 정책",
    cn: "隐私政策",
    zh: "隱私政策",
  },
  gameOptions: {
    en: "Game options",
    bg: "Опции за игра",
    ru: "Игровые настройки",
    sp: "Opciones de juego",
    it: "Opzioni di gioco",
    fr: "Options de jeu",
    jp: "ゲームオプション",
    kr: "게임 옵션",
    cn: "游戏选项",
    zh: "遊戲選項",
  },
  aboutRobotChess: {
    en: "About Robot Chess",
    bg: "За Robot Chess",
    ru: "Для Robot Chess",
    sp: "Sobre Robot Chess",
    it: "Informazioni su Robot Chess",
    fr: "A propos du robot échecs",
    jp: "ロボットチェスについて",
    kr: "로봇 체스에 대하여",
    cn: "关于国际象棋",
    zh: "關於國際象棋",
  },
  sessionOnlyLabel: {
    en:
      "These settings are session-only. If you restart the app they won't be saved!",
    bg: "Тези настройки няма да бъдат запазени ако рестартирате приложението!",
    ru: "Если вы перезапустите приложение, эти настройки не будут сохранены!",
    sp: "Estas configuraciones son solo de sesión. Si reinicia la aplicación, no se guardarán.",
    it: "Queste impostazioni sono solo per la sessione. Se riavvii l'app non verranno salvati!",
    fr: "Ces paramètres sont en session uniquement. Si vous redémarrez l'application, elles ne seront pas enregistrées!",
    jp: "これらの設定はセッションのみです。 アプリを再起動すると、保存されません！",
    kr: "이 설정은 세션 전용입니다. 앱을 다시 시작하면 저장되지 않습니다!",
    cn: "这些设置仅用于会话。 如果您重新启动应用程序，它们将不会被保存！",
    zh: "這些設置僅用於會話。 如果您重新啟動應用程序，它們將不會被保存！",
  },
  fastAction: {
    en: "fast actions",
    bg: "бързи действия",
    ru: "быстрые действия",
    sp: "acciones rápidas",
    it: "azioni veloci",
    fr: "actions rapides",
    jp: "高速アクション",
    kr: "빠른 행동",
    cn: "快速行动",
    zh: "快速行動",
  },
  play: {
    en: "Play",
    bg: "Играй",
    ru: "Играть",
    sp: "Jugar",
    it: "Giocare",
    fr: "Jouer",
    jp: "遊びます",
    kr: "놀이",
    cn: "玩",
    zh: "玩",
  },
  time: {
    en: "Time",
    bg: "време",
    ru: "Время",
    sp: "Hora",
    it: "Tempo",
    fr: "Temps",
    jp: "時間",
    kr: "시각",
    cn: "时间",
    zh: "時間",
  },
  mark: {
    en: "Mark",
    bg: "марка",
    ru: "отметка",
    sp: "marca",
    it: "marchio",
    fr: "marque",
    jp: "マーク",
    kr: "표",
    cn: "标记",
    zh: "標記",
  },
  pieces: {
    rook: {
      en: "rook",
      bg: "топ",
      ru: "ладья",
      sp: "torre",
      it: "torre",
      fr: "tour",
      jp: "ルーク",
      kr: "루크",
      cn: "车",
      zh: "車",
    },
    queen: {
      en: "queen",
      bg: "царица",
      ru: "Ферзь",
      sp: "reina",
      it: "Regina",
      fr: "reine",
      jp: "女王",
      kr: "퀸",
      cn: "女王",
      zh: "女王",
    },
    knight: {
      en: "knight",
      bg: "кон",
      ru: "Конь",
      sp: "Caballero",
      it: "cavaliere",
      fr: "Chevalier",
      jp: "騎士",
      kr: "기사",
      cn: "骑士",
      zh: "騎士",
    },
    bishop: {
      en: "bishop",
      bg: "офицер",
      ru: "слон",
      sp: "obispo",
      it: "vescovo",
      fr: "évêque",
      jp: "司教",
      kr: "주교",
      cn: "主教",
      zh: "主教",
    }
  },
  palettes: {
    default: {
      en: "default",
      bg: "основен",
      ru: "умолчанию",
      sp: "defecto",
      it: "predefinito",
      fr: "défaut",
      jp: "デフォルト",
      kr: "기본",
      cn: "默认",
      zh: "默認",
    },
    blue: {
      en: "blue",
      bg: "синьо",
      ru: "синий",
      sp: "azul",
      it: "blu",
      fr: "bleu",
      jp: "青",
      kr: "푸른",
      cn: "蓝色",
      zh: "藍色",
    },
    green: {
      en: "green",
      bg: "зелено",
      ru: "зеленый",
      sp: "verde",
      it: "verde",
      fr: "vert",
      jp: "緑",
      kr: "초록",
      cn: "绿色",
      zh: "綠色",
    },
    sweet: {
      en: "sweety",
      bg: "сладко",
      ru: "сладкий розовый",
      sp: "cariño",
      it: "Dolcemente",
      fr: "Cherie",
      jp: "甘い",
      kr: "연인",
      cn: "甜",
      zh: "甜",
    },
    gray: {
      en: "grayscale",
      bg: "черно-бяло",
      ru: "серый",
      sp: "escala de grises",
      it: "in scala di grigi",
      fr: "niveaux de gris",
      jp: "グレースケール",
      kr: "그레이 스케일",
      cn: "灰阶",
      zh: "灰階",
    },
    cyan: {
      en: "cyan",
      bg: "синьо-зелен",
      ru: "циан",
      sp: "cian",
      it: "ciano",
      fr: "cyan",
      jp: "シアン",
      kr: "청록",
      cn: "青色",
      zh: "青色",
    }
  },
  languages: {
    en: {
      en: "English",
      bg: "Bulgarian",
      ru: "Russian",
      sp: "Spanish",
      it: "Italian",
      fr: "French",
      jp: "Japanese",
      kr: "Korean",
      cn: "Chinese(simplified)",
      zh: "Chinese(tranditional)",
    },
    bg: {
      en: "Английски",
      bg: "Български",
      ru: "Руски",
      sp: "испански",
      it: "Италиански",
      fr: "Френски",
      jp: "японски",
      kr: "корейски",
      cn: "опростен китайски",
      zh: "традиционен китайски",
    },
    ru: {
      en: "Aнглийский",
      bg: "Болгарский",
      ru: "Русский",
      sp: "испанский",
      it: "итальянский",
      fr: "французкий язык",
      jp: "японский язык",
      kr: "Корейский",
      cn: "упрощенный китайский",
      zh: "традиционный китайский",
    },
    sp: {
      en: "Inglés",
      bg: "búlgaro",
      ru: "ruso",
      sp: "Español",
      it: "italiano",
      fr: "francés",
      jp: "japonés",
      kr: "coreano",
      cn: "chino simplificado",
      zh: "chino tradicional",
    },
    it: {
      en: "Inglese",
      bg: "bulgaro",
      ru: "russo",
      sp: "spagnolo",
      it: "italiano",
      fr: "francese",
      jp: "giapponese",
      kr: "coreano",
      cn: "cinese semplificato",
      zh: "cinese tradizionale",
    },
    fr: {
      en: "Anglais",
      bg: "bulgare",
      ru: "russe",
      sp: "Espagnol",
      it: "italien",
      fr: "français",
      jp: "Japonais",
      kr: "coréen",
      cn: "chinois simplifié",
      zh: "chinois traditionnel",
    },
    jp: {
      en: "英語",
      bg: "ブルガリア語",
      ru: "ロシア",
      sp: "スペイン語",
      it: "イタリアの",
      fr: "フランス語",
      jp: "日本語",
      kr: "韓国語",
      cn: "簡体中語",
      zh: "繁体中語",
    },
    kr: {
      en: "영어",
      bg: "불가리아어",
      ru: "러시아어",
      sp: "스페인어",
      it: "이탈리아어",
      fr: "프랑스어",
      jp: "일본어",
      kr: "한국어",
      cn: "중국어 간체",
      zh: "전통 중국어",
    },
    cn: {
      en: "英语",
      bg: "保加利亚语",
      ru: "俄语",
      sp: "西班牙语",
      it: "义大利语",
      fr: "法语",
      jp: "日语",
      kr: "韩语",
      cn: "简体中文",
      zh: "繁体中文",
    },
    zh: {
      en: "英语",
      bg: "保加利亚语",
      ru: "俄语",
      sp: "西班牙语",
      it: "義大利文",
      fr: "法文",
      jp: "日本",
      kr: "韓語",
      cn: "簡體中文",
      zh: "繁體中文",
    },
    native: {
      en: "English",
      bg: "Български",
      ru: "Руский",
      sp: "Español",
      it: "italiano",
      fr: "français",
      jp: "日本語",
      kr: "한국어",
      cn: "简体中文",
      zh: "繁體中文",
    }
  },
  menu:{
    play: {
      en: "Play",
      bg: "играя",
      ru: "Играть",
      sp: "Jugar",
      it: "Giocare",
      fr: "Jouer",
      jp: "ゲームを始める",
      kr: "게임 시작",
      cn: "开始游戏",
      zh: "開始遊戲",
    },
    setting: {
      en: "Settings",
      bg: "Настройки",
      ru: "настройки",
      sp: "Configuraciones",
      it: "impostazioni",
      fr: "Paramètres",
      jp: "設定",
      kr: "설정",
      cn: "设定",
      zh: "設定",
    },
    newgame: {
      en: "New Game",
      bg: "Нова игра",
      ru: "Новая игра",
      sp: "Nuevo juego",
      it: "Nuovo gioco",
      fr: "Nouveau jeu",
      jp: "新しいゲーム",
      kr: "새로운 게임",
      cn: "新游戏",
      zh: "新遊戲",
    },
  },
};

export const globalStyles = {
  drawerItemLabel: {
    margin: 12,
    marginLeft: 20,
    fontSize: 19,
    fontWeight: "bold",
  }
};

