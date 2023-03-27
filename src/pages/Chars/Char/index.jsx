import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";

import style from "../Chars.module.css";

export default function Char({ item }) {
  return (
    <Card className={style.char}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item?.imageUrl}
          alt={item.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.fullName}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            <Button variant="outlined">
              <Link className={style.link} to={`/charinfo/${item.id}`}>About character</Link>
            </Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
