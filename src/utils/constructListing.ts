export default function constructListing(
    title, description, image, info, link) {
    //returns listing
    const getDate = (info) => {
      let dateSplit = info.split("|")[0];
      let date = dateSplit.substring(0, dateSplit.length - 1);
      return date;
    }
    const listing = {
      title,
      description,
      
      date : getDate(info),
      image,
      info,
      link,
    };
    return listing;
  };