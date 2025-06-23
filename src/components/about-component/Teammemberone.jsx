import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import team1 from "../../assets/team-1.jpg";
import team2 from "../../assets/team-3.jpg";
import team3 from "../../assets/team-2.jpg";
import team4 from "../../assets/team-4.jpg";

const TeamMemberOne = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mr.Mike Banding",
      position: "Manager",
      image: team1, // ✅ FIXED
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      instagramLink: "https://www.instagram.com",
    },
    {
      id: 2,
      name: "Mr.Peter Pan",
      position: "Developer",
      image: team2,
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      instagramLink: "https://www.instagram.com",
    },
    {
      id: 3,
      name: "Ms.Sophia",
      position: "Designer",
      image: team3,
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      instagramLink: "https://www.instagram.com",
    },
    {
      id: 4,
      name: "Mr.John Lee",
      position: "Chairman",
      image: team4,
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      instagramLink: "https://www.instagram.com",
    },
  ];

  return (
    <div className="py-20 bg-white">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Team Members</h2>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet conse ctetu.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="text-center group">
            {/* Image Section */}
            <div className="relative overflow-hidden rounded-md shadow-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
              />
              {/* Social Icons (no overlay) */}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="flex gap-4 bg-white px-4 py-2 rounded shadow">
                  <a
                    href={member.fbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-blue-500"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href={member.twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-sky-500"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href={member.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-pink-500"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="mt-4">
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberOne;
