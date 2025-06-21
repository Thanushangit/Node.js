import Movie from "../models/movie.model.js";

export const getMovie = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getsinglemovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id); // ✅ FIXED

    if (movie === null) {
      return res.status(404).json({ message: "Can't find the item" });
    }

    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createMovies = async (req, res) => {
  const newMovie = new Movie({
    title: req.body.title,
    des: req.body.des,
  });

  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const updateMovie = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        des: req.body.des,
      },
      { new: true }
    );
    res.status(200).json(updateMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteMovie = async (req, res) => {
  const movieid = req.params.id;

  try {
    await Movie.deleteOne({ _id: movieid });
    res.json({ message: "movie deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
