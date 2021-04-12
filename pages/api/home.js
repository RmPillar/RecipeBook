export default function handler(req, res) {
  res
    .status(200)
    .json({
      hero: {
        heading: 'RecipeBook',
        tagline: 'All your baking needs in one simple place',
      },
    });
}
