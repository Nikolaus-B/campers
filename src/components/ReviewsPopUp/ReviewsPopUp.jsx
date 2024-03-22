import { uid } from "uid";
import {
  Review,
  ReviewComment,
  ReviewHeader,
  ReviewHeaderWrapper,
  ReviewImageLetter,
  ReviewList,
  ReviewerName,
} from "./ReviewsPopUp.styled";

export const ReviewsPopUp = ({ reviews }) => {
  return (
    <div>
      <ReviewList>
        {reviews.map((review) => {
          console.log(review);
          return (
            <Review key={uid()}>
              <ReviewHeader>
                <ReviewImageLetter>
                  {review.reviewer_name
                    ? review.reviewer_name.charAt(0).toUpperCase()
                    : "A"}
                </ReviewImageLetter>
                <ReviewHeaderWrapper>
                  <ReviewerName>
                    {review.reviewer_name ? review.reviewer_name : "anonim"}
                  </ReviewerName>
                  <div></div>
                </ReviewHeaderWrapper>
              </ReviewHeader>
              <ReviewComment>{review.comment}</ReviewComment>
            </Review>
          );
        })}
      </ReviewList>
    </div>
  );
};
