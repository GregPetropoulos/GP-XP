
interface GithubUser {
  github_username: string;
name: string;
profile_image: string;
profile_image_90: string;
twitter_username: string;
user_id: number;
username: string;
website_url: string;
}
export interface Articles {
  canonical_url: string;
  collection_id: string | number | null;
  comments_count: number;
  cover_image: string;
  created_at: string;
  crossposted_at: string | null;
  description: string;
  edited_at: string;
  id: number;
  language: string;
  last_comment_at: string;
  path: string;
  positive_reactions_count: number;
  public_reactions_count: number;
  published_at: string;
  published_timestamp: string;
  readable_publish_date: string;
  reading_time_minutes: number;
  slug: string;
  social_image: string;
  subforem_id: string | number | null;
  tag_list: string[] | null;
  tags: string;
  title: string;
  type_of: string;
  url: string;
  user:GithubUser
}
