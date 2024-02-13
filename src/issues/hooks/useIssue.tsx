import { useQuery } from "@tanstack/react-query"
import { githubApi } from "../../apis/githubApi";
import { Issue } from "../interfaces";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sleep } from "../../helpers/sleep";

export const useIssue = (issueNumber: number) => {

  const getIssueInfo = async ():Promise<Issue> => {
    sleep(2)
    const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);
    return data;
  }

  const getIssueComments = async ():Promise<Issue[]> => {
    sleep(2)
    const { data } = await githubApi.get<Issue[]>(`/issues/${issueNumber}/comments`);
    return data;
  }


  const isIssueQuery = useQuery({
    queryKey:['issue', issueNumber], 
    queryFn: getIssueInfo
  })

  const commentsQuery = useQuery({
    queryKey:['issue', issueNumber, 'comments'], 
    queryFn: getIssueComments
  })

  return {
    isIssueQuery,
    commentsQuery
  }
}
