package com.movie.service;

public interface PickService {
	public int deletePick(Long seat_id);
	public int insertPick(Long seat_id, Long member_id);
}
