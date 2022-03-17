import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import TripComponent from "../../components/TripComponent/TripComponent";
import { fetchUsersOneTrip } from "../../store/trips/actions";
import { CommentSection } from 'react-comments'

export default function TripDetails() {
  const { tripId } = useParams();
  const id = parseInt(tripId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersOneTrip(id));
  }, [dispatch, id]);

  const oneTrip = useSelector(selectOneTrip)

  if (!oneTrip) {
    return null;
  }

  console.log("This is oneTrip", oneTrip)


  return (
    <TripComponent
      key={index}
      trip={trip}
    />
  );
};
