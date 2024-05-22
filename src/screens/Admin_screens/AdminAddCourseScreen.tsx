import React, { useState } from 'react';
import { Box, Button, TextField, MenuItem, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

const AdminAddCourseScreen: React.FC = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);

  const handleFormSubmit = (values: any) => {
    console.log(values);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box m="20px">
      <Typography variant="h4" mb="20px" color="primary">
        Create New Course
      </Typography>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="20px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                select
                label="Category"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.category}
                name="category"
                error={!!touched.category && !!errors.category}
                helperText={touched.category && errors.category}
                sx={{ gridColumn: "span 2" }}
              >
                <MenuItem value="technology">Technology</MenuItem>
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="art">Art</MenuItem>
                <MenuItem value="science">Science</MenuItem>
              </TextField>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Course Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.courseName}
                name="courseName"
                error={!!touched.courseName && !!errors.courseName}
                helperText={touched.courseName && errors.courseName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                multiline
                rows={4}
                sx={{ gridColumn: "span 4" }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.online}
                    onChange={handleChange}
                    name="online"
                  />
                }
                label="Online"
                sx={{ gridColumn: "span 2" }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.offline}
                    onChange={handleChange}
                    name="offline"
                  />
                }
                label="Offline"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 4" }}
              />
              <Button
                variant="contained"
                component="label"
                sx={{ gridColumn: "span 4", mt: 2 }}
              >
                Upload Image
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(event) => {
                    handleImageChange(event);
                    setFieldValue("image", event.currentTarget.files?.[0]);
                  }}
                />
              </Button>
              {imagePreview && (
                <Box
                  component="img"
                  src={imagePreview as string}
                  alt="Preview"
                  sx={{ gridColumn: "span 4", maxHeight: 200, mt: 2, borderRadius: 2, border: '1px solid #ccc' }}
                />
              )}
            </Box>
            <Box display="flex" justifyContent="end" mt="30px">
              <Button type="submit" color="primary" variant="contained">
                Create New Course
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

const checkoutSchema = yup.object().shape({
  category: yup.string().required("required"),
  courseName: yup.string().required("required"),
  description: yup.string().required("required"),
  online: yup.boolean(),
  offline: yup.boolean(),
  price: yup.number().required("required").positive("must be a positive number"),
  image: yup.mixed().required("required"),
});

const initialValues = {
  category: "",
  courseName: "",
  description: "",
  online: false,
  offline: false,
  price: "",
  image: null,
};

export default AdminAddCourseScreen;
