import db from '../config/db.js'



class BlogsController {

    static async allBlogs(req, res) {
        try {
            const result = await db.query("SELECT * FROM blogs ORDER BY id DESC");
            return res.json(result.rows);
        } catch (error) {
            return res.status(500).json({ message: "Error fetching blogs", error })
        }
    }
    
    
    static async findBlogById(req, res) {
        try {
            const { id } = req.params;

            if (!/^\d+$/.test(id)) {
                return res.status(400).json({ message: "ID must be a number" });
            }
            
            const result = await db.query("SELECT * FROM blogs WHERE id = $1", [id]);

            if (result.rowCount === 0) {
                return res.status(404).json({ message: "Blogs not found" });
            }

             return res.json(result.rows[0]);
        } catch (error) {
            return res.status(500).json({ message: "Error fetching blog", error });
        }
    }


}



export default BlogsController;