import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Brand } from './models/brandModel.js';
import fs from 'fs';

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log('Connected to database');

    // Get all files in uploads folder
    const files = fs.readdirSync('./uploads');
    
    // Clear existing brands
    await Brand.deleteMany({});
    console.log('Cleared existing brands');

    // Create brand entries for each image
    for (const file of files) {
      if (file.match(/\.(png|jpg|jpeg|gif|svg)$/i)) {
        // Extract title from filename (e.g., "1697302699780-visa.png" -> "visa")
        const title = file.replace(/^\d+-/, '').replace(/\.[^.]+$/, '');
        
        const brand = await Brand.create({
          title: title,
          publishDate: new Date(),
          image: file
        });
        console.log(`Created brand: ${brand.title}`);
      }
    }

    console.log('Seeding complete!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
