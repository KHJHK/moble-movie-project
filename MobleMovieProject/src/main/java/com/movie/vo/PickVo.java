package com.movie.vo;

import lombok.Data;

@Data
public class PickVo {
	private Long pick_id;
	private SeatVo seat_id;
	private MemberVo member_id;
}
