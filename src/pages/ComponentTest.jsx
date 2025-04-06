import Button from '../components/Button';
import { MdOutlineNavigateNext } from 'react-icons/md';

const ComponentTest = () => {
  return (
    <div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6WM_q193Kls?si=W-V5YgwMYB7YJVmr"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <h1>Test your components on this page</h1>
      <div>
        <h2>Buttons</h2>
        <div>
          <Button type="outline" text="Learn More" icon={<MdOutlineNavigateNext />} />
          <Button type="solid" text="Learn More" icon={<MdOutlineNavigateNext />} />
        </div>
      </div>
    </div>
  );
};

export default ComponentTest;
