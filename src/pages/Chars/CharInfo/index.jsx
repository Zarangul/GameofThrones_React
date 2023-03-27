import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { ENDPOINTS } from "api/routing";
import { GET } from "api/api";
import style from "../Chars.module.css";

export default function CharInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [char, setChar] = useState(null);
  useEffect(() => {
    GET(ENDPOINTS.GET_CHAR_BY_ID(id), setChar);
  }, []);
  return (
    <div className={style.charinfo}>
      <div className={style.gobackbutton}>
        <Button onClick={() => navigate(-1)} variant="contained">
          Go back
        </Button>
      </div>
      {char ? (
        <Card className={style.item}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={char?.imageUrl}
              alt={char?.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {char?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {char?.fullName}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}
