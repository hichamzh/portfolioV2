import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";

export const Card_component = ({ objets }) => {
  return (
    <>
      {objets.map((objet) => (
        <React.Fragment key={objet.id}>
          <Card className="max-w-[24rem] relative my-6 h-[550px]">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none rounded-t-lg relative border-b-2 border-primary"
            >
              <img src={objet.img} alt="image du projet" />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" className="text-primary">
                {objet.name}
              </Typography>
              <Typography
                variant="lead"
                className="mt-3 font-normal text-secondary"
              >
                {objet.content}
              </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center -space-x-3">
                <a href={objet.github} target="_blank">
                <Tooltip content="Hicham Zouit">
                  <Avatar
                    size="sm"
                    variant="circular"
                    alt="natali craig"
                    src="projets/pika.png"
                    className="border-2 border-white hover:z-10"
                    />
                </Tooltip>
                    </a>
              </div>
              <a href={objet.link} target="_blank">
                <Button className="bg-accent">Voir Plus</Button>
              </a>
            </CardFooter>
          </Card>
        </React.Fragment>
      ))}
    </>
  );
};
