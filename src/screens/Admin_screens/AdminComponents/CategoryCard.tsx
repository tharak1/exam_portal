import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

interface BasicCardProps {
  name: string;
  date: string;
  image: string;
}

const BasicCard: React.FC<BasicCardProps> = ({name,date,image}) => {
  return (
    <Card sx={{ height: 370 }}>
      <div>
        <Typography level="title-lg">{name}</Typography>
        <Typography level="body-sm">Date Created : {date}</Typography>
        <IconButton
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="220px">
        <img
          src={image}
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
          className="object-contain"
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <Button
          variant="solid"
          size="md"
          color="danger"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default BasicCard;
