import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { HiArrowLongDown } from 'react-icons/hi';
import RotateScroll from '../assets/rotatescroll.svg';
import Card from '../components/Card';

const Instruction = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-button">
        <BsArrowLeft size={25} onClick={() => navigate(-1)} />
      </div>
      <Card>
        <h1>GaussiScape Made Easy</h1>
        <ul>
          <li>
            Choose the Right Equipment:
            <ul>
              <li>Use a camera with good resolution. Ensure stable shots using tripods or stabilizers if necessary.</li>
            </ul>
          </li>
          <li>
            Consistent Lighting:
            <ul>
              <li>Natural, diffused lighting is ideal. Avoid direct sunlight, which can cause harsh shadows.</li>
              <li>If indoors, ensure even lighting throughout the object. Avoid using flash as it can create inconsistent lighting between shots.</li>
            </ul>
          </li>
          <li>
            Multiple Angles and Coverage:
            <ul>
              <li>Take photos from all angles around the object. For a typical object, you might want to capture every 10-15 degrees horizontally.</li>
              <li>If the object has significant vertical depth, also take photos from different vertical angles (top, middle, bottom).</li>
              <li>Ensure overlap: Each point on the object should appear in at least 3-4 images for accurate reconstruction.</li>
            </ul>
          </li>
          <li>
            Close-ups for Details:
            <ul>
              <li>For objects with intricate details, take close-up shots to ensure these details are captured.</li>
            </ul>
          </li>
          <li>
            Consistent Focus and Depth of Field:
            <ul>
              <li>Ensure the object is in sharp focus in all images.</li>
              <li>A larger depth of field (achieved with a smaller aperture, e.g., f/8 or f/11) ensures more of the object is in focus, which can be beneficial for 3D reconstruction.</li>
            </ul>
          </li>
          <li>
            Avoid Moving Objects:
            <ul>
              <li>Ensure that nothing is moving in the scene between shots, including the background. Moving objects can create reconstruction artifacts.</li>
            </ul>
          </li>
          <li>
            Reference Points:
            <ul>
              <li>If possible, have some recognizable points or markers on or around the object. These can help the software in aligning and stitching the images together.</li>
            </ul>
          </li>
          <li>
            Capture Texture:
            <ul>
              <li>Gaussian splatting and other photogrammetry techniques rely on texture to reconstruct 3D shapes. Plain, monochromatic surfaces can be challenging to model because there aren't distinct features for the software to latch onto.</li>
            </ul>
          </li>
          <li>
            Image Resolution:
            <ul>
              <li>While higher resolution images provide more detail, they also require more processing power. Depending on the software and hardware, you might need to balance resolution with processing capabilities.</li>
            </ul>
          </li>
          <li>
            Post-Processing:
            <ul>
              <li>Before feeding the images into the modeling software, you can preprocess them for consistent brightness, contrast, and color. However, avoid overly aggressive edits.</li>
            </ul>
          </li>
          <li>
            Once you've captured the images, you can feed them into your Gaussian splatting or photogrammetry software to generate the 3D model.
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Instruction;
