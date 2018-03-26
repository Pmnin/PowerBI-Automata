

module Automata {



    /// Main Game Logic
    export class Game {
        public state: boolean;

        public playAreaPositionX: number;
        public playAreaPositionY: number;

        public playAreaWidth: number;
        public playAreaHeight: number;
        
        public player: Player;
        public enemies: Array<Enemy>;

        constructor(document: Document) {

            this.player = new Player(null, 0, 0, 0, 0);
            this.enemies = [];

            //this.enemies = listOfRandomEnemies(50);
            
        }

        public start() {

        }

        public listOfEnemiesFromPBI(options: powerbi.extensibility.visual.VisualConstructorOptions) {
            var type = 0;
            

        }

        public listOfRandomEnemies(quantity: number) {
            var type: number;
            var enemies: Array<Enemy> = [];
            
            var i: number;
            for (i = 0; i < quantity; i++) {
                type = this.randomInt(1, 4);

                switch (type) {
                    case 1: //Triangle
                        enemies.push(new Enemy(i, type, 0, 0, 0, 0, 300));
                        break;
                    case 2: //Square
                        enemies.push(new Enemy(i, type, 0, 0, 0, 0, 400));
                        break;
                    case 3: //Hexagon
                        enemies.push(new Enemy(i, type, 0, 0, 0, 0, 600));
                        break;
                    case 4: //Octogon
                        enemies.push(new Enemy(i, type, 0, 0, 0, 0, 800));
                        break;
                }
            }

            return enemies;
        }

        /**
         * generate a random integer between min and max
         * function found at: https://gist.github.com/ValeryToda/fbf1de017f91c0ec3da04116c5ccf8b5
         * @param {Number} min
         * @param {Number} max
         * @return {Number} random generated integer
         */
        public randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    }


    /// Player Game Logic
    export class Player {

        public positionX: number;
        public positionY: number;

        public width: number;
        public height: number;

        public state: boolean;
        public hitpoints: number;
        

        private playerControls: any;

        private documentReference: Document;

        constructor(document: Document, x, y, width, height) {
            this.positionX = x;
            this.positionY = y;

            this.width = width;
            this.height = height;

            this.state = true;
            this.hitpoints = 3;



        }

        public update() {
        }


        public movement(movementX: number, movementY: number) {

        }

        public hit() {
            this.hitpoints--;
            if (this.hitpoints <= 0) {
                this.state = false;
            }
        }

    }

    export class Enemy {

        public id: number;

        public positionX: number;
        public positionY: number;

        public width: number;
        public height: number;

        public state: boolean;
        public hitpoints: number;
        public value: number;

        constructor(id: number, type: number, x, y, width, height, value) {
            this.positionX = x;
            this.positionY = y;

            this.width = width;
            this.height = height;

            this.state = true;
            this.hitpoints = 3;
            this.value = value;



        }

        public update() {

        }

        public movement(movementX: number, movementY: number) {

        }

        public hit() {
            this.hitpoints--;
            if (this.hitpoints <= 0) {
                this.state = false;
            }
        }

    }





}