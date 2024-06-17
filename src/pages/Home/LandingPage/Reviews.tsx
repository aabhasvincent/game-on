import React from "react";
import { StarIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import ReviewsData from "../../../data/reviews.json";

const Reviews = () => {
  return (
    <div className="testemonial flex flex-col p-2 m-2 relative overflow-hidden">
      <h1 className="text-3xl font-serif font-bold text-left">Reviews</h1>
      <div className="rtl flex flex-row space-x-3 mt-5 flex-wrap justify-start">
        {ReviewsData.reviews.map((review) => (
          <div className="reviews m-2" key={review.userName}>
            <div className=" userProfile mb-1 flex flex-row justify-start items-center">
              <UserCircleIcon height={40} width={40} />
              <span className="font-semibold font-serif ml-2">
                {review.userName}
              </span>
            </div>
            <p className="font-light font-sans flex-wrap">{review.review}</p>
            <div className="flex flex-row">
              {Array(review.rating)
                .fill(null)
                .map((index) => (
                  <span key={index}>
                    <StarIcon className="h-6 w-6 text-yellow-500 flex-col" />
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
      {/* <div className="ltr flex flex-row space-x-3 mt-4 justify-center ">
        <div className="reviews ">
          <div className=" userProfile mb-1 flex flex-row justify-start items-center">
            <UserCircleIcon height={40} width={40} />
            <span className="font-semibold font-serif ml-2">Zayden</span>
          </div>
          <p className="font-light font-sans flex-wrap">
            Loved the vibe, perfect for spending quality time with friend.
          </p>
          <div className="flex flex-row">
            {[1, 2, 3, 4].map((star) => (
              <span>
                <StarIcon className="h-6 w-6 text-yellow-500 flex-col" />
              </span>
            ))}
          </div>
        </div>
        <div className="reviews ">
          <div className=" userProfile mb-1 flex flex-row justify-start items-center">
            <UserCircleIcon height={40} width={40} />
            <span className="font-semibold font-serif ml-2">Zayden</span>
          </div>
          <p className="font-light font-sans flex-wrap">
            Loved the vibe, perfect for spending quality time with friend.
          </p>
          <div className="flex flex-row">
            {[1, 2, 3, 4].map((star) => (
              <span>
                <StarIcon className="h-6 w-6 text-yellow-500 flex-col" />
              </span>
            ))}
          </div>
        </div>
        <div className="reviews ">
          <div className=" userProfile mb-1 flex flex-row justify-start items-center">
            <UserCircleIcon height={40} width={40} />
            <span className="font-semibold font-serif ml-2">Zayden</span>
          </div>
          <p className="font-light font-sans flex-wrap">
            Loved the vibe, perfect for spending quality time with friend.
          </p>
          <div className="flex flex-row">
            {[1, 2, 3, 4].map((star) => (
              <span>
                <StarIcon className="h-6 w-6 text-yellow-500 flex-col" />
              </span>
            ))}
          </div>
        </div>
        <div className="reviews ">
          <div className=" userProfile mb-1 flex flex-row justify-start items-center">
            <UserCircleIcon height={40} width={40} />
            <span className="font-semibold font-serif ml-2">Zayden</span>
          </div>
          <p className="font-light font-sans flex-wrap">
            Loved the vibe, perfect for spending quality time with friend.
          </p>
          <div className="flex flex-row">
            {[1, 2, 3, 4].map((star) => (
              <span>
                <StarIcon className="h-6 w-6 text-yellow-500 flex-col" />
              </span>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Reviews;
