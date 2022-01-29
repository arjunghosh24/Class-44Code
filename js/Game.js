class Game
{
    constructor()
    {
        this.state = 0;
    }

    Update()
    {
        this.HandleControls();
        this.DrawObjects();
    }

    End()
    {

    }

    HandleControls()
    {
        if(keyDown("W"))
        {
            player.position.y -= 5;
        }
        if(keyDown("A"))
        {
            player.position.x -= 5;
        }
        if(keyDown("D"))
        {
            player.position.x += 5;
        }
    }

    DrawObjects()
    {
        var Xpos =  ground.position.x;
        var Ypos = ground.position.y;

        var playerXpos = player.position.x;
        var playerYpos = player.position.y;

        fill(150, 255, 50);
        rect(playerXpos,playerYpos, 20, 20);
        noFill();

        fill(255, 255, 0);
        rect(Xpos,Ypos, 1600, 30);
        noFill();
    }
}
